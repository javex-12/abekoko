// Script to create a reliable icon solution for PWA
// This creates a simple church icon using SVG that will always work

const createChurchIcon = () => {
    // Create SVG church icon
    const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
        <rect width="512" height="512" fill="#166a3a"/>
        <g fill="white">
            <!-- Church building -->
            <rect x="150" y="200" width="212" height="250"/>
            <!-- Church roof -->
            <polygon points="150,200 256,120 362,200"/>
            <!-- Cross -->
            <rect x="240" y="80" width="32" height="80"/>
            <rect x="220" y="100" width="72" height="32"/>
            <!-- Door -->
            <rect x="220" y="350" width="72" height="100" fill="#166a3a"/>
            <!-- Windows -->
            <rect x="180" y="250" width="40" height="60" fill="#166a3a"/>
            <rect x="292" y="250" width="40" height="60" fill="#166a3a"/>
        </g>
    </svg>`;
    
    return svgIcon;
};

// Convert SVG to base64 data URL
const svgToDataUrl = (svg) => {
    const base64 = btoa(svg);
    return `data:image/svg+xml;base64,${base64}`;
};

console.log('Church Icon SVG:', createChurchIcon());
console.log('Data URL:', svgToDataUrl(createChurchIcon()));