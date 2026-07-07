/* ==========================================
   WEAVECODE LABS
   GLOBAL SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-active");

            menuBtn.textContent = navLinks.classList.contains("mobile-active")
                ? "✕"
                : "☰";

        });

    }

    /* ==========================================
       STICKY HEADER
    ========================================== */

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 20) {

                header.style.boxShadow = "0 8px 24px rgba(0,0,0,.08)";

            } else {

                header.style.boxShadow = "none";

            }

        });

    }

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach(link => {

        const page = link.getAttribute("href").split("/").pop();

        if (page === currentPage) {

            link.classList.add("active");

        }

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================================
       FORM VALIDATION
    ========================================== */

    const forms = document.querySelectorAll("form");

    forms.forEach(form => {

        form.addEventListener("submit", function(e){

            const requiredFields = form.querySelectorAll("[required]");

            let valid = true;

            requiredFields.forEach(field => {

                if(field.value.trim() === ""){

                    valid = false;
                    field.style.borderColor = "#ef4444";

                }else{

                    field.style.borderColor = "#e2e8f0";

                }

            });

            if(!valid){

                e.preventDefault();

                alert("Please complete all required fields.");

            }

        });

    });

});