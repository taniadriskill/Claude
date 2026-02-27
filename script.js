// Certificate Generator Script

// Store the uploaded logo
let uploadedLogo = null;

// Get the current date in a formatted way
function getFormattedDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date('2026-02-27').toLocaleDateString('en-US', options);
}

// Initialize the date
document.getElementById('certDate').textContent = getFormattedDate();

// Handle logo upload
document.getElementById('logoInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            uploadedLogo = event.target.result;
            // Update the logo image in the preview
            const logoImg = document.getElementById('logoImage');
            logoImg.src = uploadedLogo;
            logoImg.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Preview the certificate
function previewCertificate() {
    const nameInput = document.getElementById('nameInput').value.trim();

    if (!nameInput) {
        alert('Please enter your name to preview the certificate.');
        return;
    }

    // Update the certificate with the entered name
    document.getElementById('certName').textContent = nameInput;

    // Show the certificate preview
    const preview = document.getElementById('certificatePreview');
    preview.classList.add('active');

    // Enable the download button
    document.getElementById('downloadBtn').disabled = false;

    // Scroll to the certificate
    setTimeout(() => {
        preview.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Download the certificate as PDF
function downloadCertificate() {
    const nameInput = document.getElementById('nameInput').value.trim();

    if (!nameInput) {
        alert('Please enter your name to download the certificate.');
        return;
    }

    // Get the certificate element
    const certificateElement = document.getElementById('certificateContent');

    // Create a copy for PDF generation
    const element = certificateElement.cloneNode(true);

    // Configure html2pdf options
    const opt = {
        margin: 10,
        filename: `Certificate_${nameInput.replace(/\s+/g, '_')}_${new Date().getTime()}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { format: 'a4', orientation: 'landscape' }
    };

    // Generate PDF
    html2pdf().set(opt).from(element).save();
}

// Allow pressing Enter to preview
document.getElementById('nameInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        previewCertificate();
    }
});

// Clear the preview when the user modifies the name
document.getElementById('nameInput').addEventListener('input', () => {
    const preview = document.getElementById('certificatePreview');
    preview.classList.remove('active');
    document.getElementById('downloadBtn').disabled = true;
});
