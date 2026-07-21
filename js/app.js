/* =========================================================
   VANTIX HOME LAB
   Main JavaScript
========================================================= */


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.body.classList.add(
            "loaded"
        );

        initializeClock();

        initializeUptime();

        initializeSystemCards();

    }
);


/* =========================================================
   LIVE CLOCK
========================================================= */

function initializeClock() {

    const localTime =
        document.getElementById(
            "localTime"
        );

    const footerTime =
        document.getElementById(
            "footerTime"
        );


    function updateClock() {

        const now =
            new Date();


        const time =
            now.toLocaleTimeString(
                undefined,
                {
                    hour:
                        "2-digit",

                    minute:
                        "2-digit",

                    second:
                        "2-digit"
                }
            );


        if (localTime) {

            localTime.textContent =
                time;

        }


        if (footerTime) {

            footerTime.textContent =
                time;

        }

    }


    updateClock();


    setInterval(
        updateClock,
        1000
    );

}


/* =========================================================
   UPTIME
========================================================= */

function initializeUptime() {

    const uptimeElement =
        document.getElementById(
            "uptime"
        );


    const startTime =
        Date.now();


    function updateUptime() {

        const elapsed =
            Date.now() -
            startTime;


        const totalSeconds =
            Math.floor(
                elapsed / 1000
            );


        const hours =
            Math.floor(
                totalSeconds / 3600
            );


        const minutes =
            Math.floor(
                (
                    totalSeconds % 3600
                ) / 60
            );


        const seconds =
            totalSeconds % 60;


        const formatted =

            String(hours)
                .padStart(
                    2,
                    "0"
                )

            + ":" +

            String(minutes)
                .padStart(
                    2,
                    "0"
                )

            + ":" +

            String(seconds)
                .padStart(
                    2,
                    "0"
                );


        if (uptimeElement) {

            uptimeElement.textContent =
                formatted;

        }

    }


    updateUptime();


    setInterval(
        updateUptime,
        1000
    );

}


/* =========================================================
   SYSTEM CARDS
========================================================= */

function initializeSystemCards() {

    const cards =
        document.querySelectorAll(
            ".system-card"
        );


    cards.forEach(
        (
            card,
            index
        ) => {

            card.style.opacity =
                "0";

            card.style.transform =
                "translateY(15px)";


            setTimeout(
                () => {

                    card.style.opacity =
                        "1";

                    card.style.transform =
                        "translateY(0)";

                },
                100 + (
                    index * 75
                )
            );


            card.addEventListener(
                "mouseenter",
                () => {

                    const system =
                        card.dataset.system;


                    if (
                        system
                    ) {

                        card.setAttribute(
                            "title",
                            `${system} system operational`
                        );

                    }

                }
            );

        }
    );

}


/* =========================================================
   SYSTEM STATUS
========================================================= */

function updateSystemStatus(
    status
) {

    const indicator =
        document.getElementById(
            "statusIndicator"
        );

    const text =
        document.getElementById(
            "statusText"
        );


    if (
        !indicator ||
        !text
    ) {

        return;

    }


    if (
        status ===
        "operational"
    ) {

        text.textContent =
            "Operational";

        indicator.style.background =
            "var(--green)";

        indicator.style.boxShadow =
            "0 0 10px var(--green)";

    }

    else {

        text.textContent =
            "Maintenance";

        indicator.style.background =
            "#f0b84b";

        indicator.style.boxShadow =
            "0 0 10px #f0b84b";

    }

}


/* =========================================================
   DEFAULT STATE
========================================================= */

updateSystemStatus(
    "operational"
);
