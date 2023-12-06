document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');

    projects.forEach((project, index) => {
        const detailsButton = project.querySelector('.details-button');
        const projectDescription = project.querySelector('.project-description');

        detailsButton.addEventListener('click', () => {
            if (projectDescription.style.display === 'block') {
                projectDescription.style.display = 'none';
            } else {
                projectDescription.style.display = 'block';
            }
        });
    });
});
