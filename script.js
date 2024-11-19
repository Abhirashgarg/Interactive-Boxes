function toggleBox(id) {
    // Get all boxes
    const boxes = document.querySelectorAll('.box');

    // Loop through boxes and collapse them
    boxes.forEach((box) => {
        if (box.id === id) {
            // Toggle the clicked box
            box.classList.toggle('expanded');
        } else {
            // Collapse other boxes
            box.classList.remove('expanded');
        }
    });
}
