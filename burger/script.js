(function () {
    function toggleNav() {
        // Define targets
        const button = document.querySelector('.burger-button');
        const target = document.querySelector('#navigation');

        button.addEventListener('click', () => {
            const currentState = target.getAttribute("data-state");

            if (!currentState || currentState === "closed") {
                target.setAttribute("data-state", "opened");
                button.setAttribute("data-expanded", "true");
            } else {
                target.setAttribute("data-state", "closed");
                button.setAttribute("data-expanded", "false");
            }

        });
    } // end toggleNav()

    toggleNav();
}());