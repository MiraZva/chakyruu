/* =========================
   OPENING ENVELOPE
========================= */

const waxSeal =
    document.getElementById("waxSeal");

const openingScreen =
    document.getElementById("openingScreen");

const music =
    document.getElementById("backgroundMusic");


waxSeal.addEventListener("click", () => {

    if (
        openingScreen.classList.contains("open")
    ) {
        return;
    }


    /* Open envelope */

    openingScreen.classList.add("open");


    /* Start music */

    music.play().catch((error) => {

        console.log(
            "Music could not start:",
            error
        );

    });


    /* Remove after envelope animation */

    setTimeout(() => {

        openingScreen.style.display = "none";

    }, 1600);

});



/* =========================
   COUNTDOWN
========================= */


/* WEDDING DATE:
   27 SEPTEMBER 2026
   18:00
*/

const weddingDate = new Date(
    "2026-09-27T18:00:00"
).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();


    const distance =
        weddingDate - now;


    if (distance <= 0) {

        document.getElementById(
            "days"
        ).textContent = "00";


        document.getElementById(
            "hours"
        ).textContent = "00";


        document.getElementById(
            "minutes"
        ).textContent = "00";


        document.getElementById(
            "seconds"
        ).textContent = "00";


        return;
    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            )
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            )
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                distance %
                (1000 * 60)
            )
            /
            1000
        );


    document.getElementById(
        "days"
    ).textContent =
        String(days).padStart(2, "0");


    document.getElementById(
        "hours"
    ).textContent =
        String(hours).padStart(2, "0");


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes).padStart(2, "0");


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds).padStart(2, "0");

}


/* Start immediately */

updateCountdown();


/* Update every second */

setInterval(
    updateCountdown,
    1000
);