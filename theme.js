<script>
function copyEmailToClipboard(event) {
    event.preventDefault(); // Stop the link from navigating
    
    const email = 'lildavegoth@proton.me';
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
        // Success! Show feedback
        const link = event.currentTarget;
        const originalText = link.querySelector('.link-text').textContent;
        
        // Change to "Copied!" temporarily
        link.querySelector('.link-text').textContent = 'Copied!';
        link.style.background = 'rgba(193, 252, 50, 0.2)';
        
        // Revert after 2 seconds
        setTimeout(() => {
            link.querySelector('.link-text').textContent = originalText;
            link.style.background = '';
        }, 2000);
        
    }).catch(err => {
        // Fallback for older browsers
        console.error('Failed to copy: ', err);
        
        // Try old method
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Show feedback
        const link = event.currentTarget;
        const originalText = link.querySelector('.link-text').textContent;
        link.querySelector('.link-text').textContent = 'Copied!';
        
        setTimeout(() => {
            link.querySelector('.link-text').textContent = originalText;
        }, 2000);
    });
}
</script>