function openSection(event, sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Remove active class from all links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.classList.remove('active'));

    // Show the selected section and set the clicked link to active
    document.getElementById(sectionId).classList.add('active');
    event.currentTarget.classList.add('active');
}
