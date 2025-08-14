/**
 * Salem Church CMS Content Loader
 * Loads dynamic content from CMS files and updates the website
 */

class CMSContentLoader {
    constructor() {
        this.contentCache = {};
        this.init();
    }

    async init() {
        console.log('🔗 Initializing CMS Content Loader...');
        await this.loadAllContent();
    }

    /**
     * Parse Markdown frontmatter and content
     */
    parseMarkdown(content) {
        const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
        const match = content.match(frontmatterRegex);
        
        if (!match) {
            return { metadata: {}, content: content };
        }

        const frontmatter = match[1];
        const body = match[2];
        const metadata = {};

        // Parse YAML frontmatter
        frontmatter.split('\n').forEach(line => {
            const colonIndex = line.indexOf(':');
            if (colonIndex > 0) {
                const key = line.substring(0, colonIndex).trim();
                let value = line.substring(colonIndex + 1).trim();
                
                // Remove quotes
                if ((value.startsWith('"') && value.endsWith('"')) || 
                    (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }
                
                metadata[key] = value;
            }
        });

        return { metadata, content: body.trim() };
    }

    /**
     * Load service information from CMS
     */
    async loadServiceInfo() {
        try {
            console.log('📅 Loading service information...');
            
            // Try to get the latest service file
            const response = await fetch('/content/service/2025-01-13-current-service.md');
            
            if (!response.ok) {
                throw new Error('Service file not found');
            }
            
            const content = await response.text();
            const parsed = this.parseMarkdown(content);
            
            console.log('✅ Service info loaded:', parsed.metadata);
            this.updateServiceDisplay(parsed.metadata);
            
            return parsed;
        } catch (error) {
            console.log('❌ Failed to load service info, using static content:', error);
            return null;
        }
    }

    /**
     * Update the service information display on the website
     */
    updateServiceDisplay(serviceData) {
        try {
            // Find the service card element
            const serviceCard = document.querySelector('.service-card');
            if (!serviceCard) {
                console.log('❌ Service card element not found');
                return;
            }

            // Update service details
            const serviceDetails = serviceCard.querySelector('.service-details');
            if (serviceDetails) {
                serviceDetails.innerHTML = `
                    <p><strong>Date:</strong> ${serviceData.service_date || 'TBD'}</p>
                    <p><strong>Collect:</strong> ${serviceData.collect || 'TBD'}</p>
                    <p><strong>Liturgical Colour:</strong> <span class="red">${serviceData.liturgical_colour || 'Red'}</span></p>
                    <p><strong>Theme:</strong> ${serviceData.theme || 'TBD'}</p>
                    ${serviceData.notes ? `<p><strong>Notes:</strong> ${serviceData.notes}</p>` : ''}
                `;
                
                console.log('✅ Service display updated successfully');
                
                // Add a subtle indicator that content is from CMS
                if (!serviceCard.querySelector('.cms-indicator')) {
                    const indicator = document.createElement('div');
                    indicator.className = 'cms-indicator';
                    indicator.style.cssText = `
                        font-size: 0.8rem;
                        color: #666;
                        text-align: right;
                        margin-top: 10px;
                        font-style: italic;
                    `;
                    indicator.innerHTML = '📝 Updated via CMS';
                    serviceCard.appendChild(indicator);
                }
            }
        } catch (error) {
            console.log('❌ Error updating service display:', error);
        }
    }

    /**
     * Load announcements from CMS
     */
    async loadAnnouncements() {
        try {
            console.log('📢 Loading announcements...');
            
            // For now, we'll load the known files
            const announcementFiles = [
                '/content/announcements/2025-01-13-weekly-services.md',
                '/content/announcements/2025-01-13-church-needs.md'
            ];
            
            const announcements = [];
            
            for (const file of announcementFiles) {
                try {
                    const response = await fetch(file);
                    if (response.ok) {
                        const content = await response.text();
                        const parsed = this.parseMarkdown(content);
                        announcements.push({
                            ...parsed.metadata,
                            body: parsed.content,
                            filename: file
                        });
                    }
                } catch (error) {
                    console.log(`⚠️ Could not load ${file}:`, error);
                }
            }
            
            if (announcements.length > 0) {
                console.log(`✅ Loaded ${announcements.length} announcements`);
                this.updateAnnouncementsDisplay(announcements);
            }
            
            return announcements;
        } catch (error) {
            console.log('❌ Failed to load announcements:', error);
            return [];
        }
    }

    /**
     * Update announcements display
     */
    updateAnnouncementsDisplay(announcements) {
        try {
            const announcementsGrid = document.querySelector('.announcements-grid');
            if (!announcementsGrid) {
                console.log('❌ Announcements grid not found');
                return;
            }

            // Clear existing announcements (but keep structure)
            const existingCards = announcementsGrid.querySelectorAll('.announcement-card');
            
            announcements.forEach((announcement, index) => {
                if (existingCards[index]) {
                    const card = existingCards[index];
                    const title = card.querySelector('h3');
                    const list = card.querySelector('ul');
                    
                    if (title) {
                        title.textContent = announcement.title || announcement.category || 'Announcement';
                    }
                    
                    if (list && announcement.body) {
                        // Convert markdown content to list items
                        const lines = announcement.body.split('\n').filter(line => line.trim());
                        list.innerHTML = lines.map(line => {
                            // Remove markdown list markers
                            const cleanLine = line.replace(/^[-*+]\s*/, '');
                            return `<li>${cleanLine}</li>`;
                        }).join('');
                    }
                    
                    // Add CMS indicator
                    if (!card.querySelector('.cms-indicator')) {
                        const indicator = document.createElement('div');
                        indicator.className = 'cms-indicator';
                        indicator.style.cssText = `
                            font-size: 0.8rem;
                            color: #666;
                            text-align: right;
                            margin-top: 10px;
                            font-style: italic;
                        `;
                        indicator.innerHTML = '📝 Updated via CMS';
                        card.appendChild(indicator);
                    }
                }
            });
            
            console.log('✅ Announcements display updated');
        } catch (error) {
            console.log('❌ Error updating announcements display:', error);
        }
    }

    /**
     * Load prayer points from CMS
     */
    async loadPrayerPoints() {
        try {
            console.log('🙏 Loading prayer points...');
            
            const response = await fetch('/content/prayer/2025-week-3.md');
            
            if (!response.ok) {
                throw new Error('Prayer file not found');
            }
            
            const content = await response.text();
            const parsed = this.parseMarkdown(content);
            
            console.log('✅ Prayer points loaded:', parsed.metadata);
            this.updatePrayerDisplay(parsed.metadata, parsed.content);
            
            return parsed;
        } catch (error) {
            console.log('❌ Failed to load prayer points:', error);
            return null;
        }
    }

    /**
     * Update prayer points display
     */
    updatePrayerDisplay(prayerData, content) {
        try {
            // Update prayer points
            const prayerList = document.querySelector('#daily-prayers');
            if (prayerList && prayerData.prayer_points) {
                // Parse prayer points (they're stored as YAML array)
                let prayerPoints = [];
                
                // Try to extract prayer points from the content or metadata
                if (typeof prayerData.prayer_points === 'string') {
                    // If it's a string, try to parse it
                    prayerPoints = prayerData.prayer_points.split('\n').filter(p => p.trim());
                } else if (Array.isArray(prayerData.prayer_points)) {
                    prayerPoints = prayerData.prayer_points;
                }
                
                if (prayerPoints.length > 0) {
                    prayerList.innerHTML = prayerPoints.map(point => `<li>${point}</li>`).join('');
                }
            }
            
            // Update food for thought
            const thoughtElement = document.querySelector('#daily-thought');
            if (thoughtElement && prayerData.food_for_thought) {
                thoughtElement.textContent = prayerData.food_for_thought;
                
                // Add scripture reference if available
                if (prayerData.scripture) {
                    thoughtElement.innerHTML += `<br><br><em>- ${prayerData.scripture}</em>`;
                }
            }
            
            console.log('✅ Prayer points display updated');
        } catch (error) {
            console.log('❌ Error updating prayer display:', error);
        }
    }

    /**
     * Load all content from CMS
     */
    async loadAllContent() {
        console.log('🔄 Loading all CMS content...');
        
        // Load content in parallel
        const promises = [
            this.loadServiceInfo(),
            this.loadAnnouncements(),
            this.loadPrayerPoints()
        ];
        
        try {
            await Promise.all(promises);
            console.log('✅ All CMS content loaded successfully');
            
            // Show success notification
            this.showLoadingNotification('CMS content loaded successfully! 🎉', 'success');
        } catch (error) {
            console.log('⚠️ Some CMS content failed to load:', error);
            this.showLoadingNotification('Some content loaded from CMS', 'info');
        }
    }

    /**
     * Show loading notification
     */
    showLoadingNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 10000;
            font-family: Arial, sans-serif;
            font-size: 14px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            max-width: 300px;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);
    }

    /**
     * Refresh content manually
     */
    async refresh() {
        console.log('🔄 Manually refreshing CMS content...');
        this.contentCache = {}; // Clear cache
        await this.loadAllContent();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM loaded, initializing CMS Content Loader...');
    window.cmsLoader = new CMSContentLoader();
});

// Make refresh function available globally
window.refreshCMSContent = () => {
    if (window.cmsLoader) {
        window.cmsLoader.refresh();
    }
};