function handleSubmit(event) {
    event.preventDefault();
    const symptoms = Array.from(document.querySelectorAll('input[name="symptoms"]:checked')).map(cb => cb.value);
    symptoms.push(...selectedSymptoms); // Include custom ones
    
    // NEW: Check if at least one symptom is selected
    if (symptoms.length === 0) {
        alert('Please select at least one symptom.');
        return; // Stop submission
    }
    
    const data = Object.fromEntries(new FormData(event.target)) || {};
    data.symptoms = symptoms;
    console.log('Form submitted:', data);
    alert('Symptom report submitted successfully!\n\nData:\n' + JSON.stringify(data, null, 2));
    
    // Automatically refresh after 2 seconds
    setTimeout(() => {
        location.reload();
    }, 2000);
}