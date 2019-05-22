<template>
    <section class="hero">
        <div class="container">
            <div class="hero-inner">
                <div class="hero-copy">
                    <h1 class="hero-title mt-0">
                        Hi,
                    </h1>
                    <p class="hero-paragraph">
                        I'm Andrei, software developer recently turned
                        freelancer. I worked in the past 5 years at two
                        companies with reputable international web & software
                        development projects. Happy to meet you here and can't
                        wait to discuss your project - let's see if we're a good
                        fit.
                    </p>
                    <p class="hero-cta">
                        <!-- <a class="button button-dark button-shadow" href="#"
                            >Pricing and plans</a
                        > -->
                    </p>
                </div>
                <div class="hero-illustration">
                    <div class="hero-shapes is-revealing">
                        <svg
                            width="724"
                            height="672"
                            viewBox="0 0 724 672"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient
                                    x1="87.336%"
                                    y1="7.447%"
                                    x2="66.279%"
                                    y2="44.56%"
                                    id="hero-shapes-a"
                                >
                                    <stop stop-color="#A3A9F1" offset="0%" />
                                    <stop stop-color="#6A72E4" offset="100%" />
                                </linearGradient>
                                <linearGradient
                                    x1="50%"
                                    y1="0%"
                                    x2="50%"
                                    y2="100%"
                                    id="hero-shapes-b"
                                >
                                    <stop stop-color="#82DDFC" offset="0%" />
                                    <stop stop-color="#0181F6" offset="100%" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M675.09 555.602c101.344 0-138.133-250.973-138.133-352.317S664.223.91 562.879.91C461.535.91.543 80.5.543 181.844S573.746 555.602 675.09 555.602z"
                                fill="url(#hero-shapes-a)"
                            />
                            <path
                                d="M667.21 644.029c111.82-59.115-15.77-185.344-15.77-321.482 0-136.138-.284-340.372-136.422-321.106C378.88 20.708 433.487 224.707 85.874 306.688c-347.614 81.98 469.517 396.456 581.336 337.34z"
                                transform="matrix(-1 0 0 1 723.483 15)"
                                fill="url(#hero-shapes-b)"
                            />
                            <path
                                d="M532.631 556.964c23.168-12.535-176.81-30.951-173.117-8.023-16.445-27.256-.668 111.452-1.357 97.18-17.805 14.436 202.398 23.384 180.678 25.205 4.694-22.81 13.508-143.183-15.392-139.49-1.105-3.22 20.111-5.785 9.188 25.128"
                                fill="#FFE5F1"
                            />
                            <path
                                d="M500.754 531.682c23.168-12.535-176.81-30.95-173.117-8.023-16.445-27.256-.668 111.452-1.357 97.18-17.805 14.436 202.398 23.384 180.678 25.205 4.694-22.809 13.508-143.183-15.392-139.49-1.105-3.219 20.111-5.785 9.188 25.128m-1.834 1.51c22.705-12.117 22.727 86.08 26.346 108.244-16.116-26.348-196.655-8.263-197.329-22.06-17.45 13.955 2.35-93.395-18.937-91.634 4.601-22.049 209.238-22.41 180.916-18.84"
                                fill="#FF6DB1"
                            />
                        </svg>
                    </div>
                    <div
                        class="hero-media is-revealing"
                        style="perspective:800px"
                    >
                        <img
                            class="perspective-image"
                            src="/images/banner.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style type="text/css">
.perspective-image {
    transform-style: preserve-3d;
    transform: rotate3d(-1, 4, 0, -4deg);
}
</style>
