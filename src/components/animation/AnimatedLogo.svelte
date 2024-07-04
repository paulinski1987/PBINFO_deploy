<script>
    import anime from "animejs";
    import { onMount } from "svelte";
    import { colorMode } from "@sveltestrap/sveltestrap";

    onMount(() => {
        setTimeout(() => {
            anime
                .timeline({
                    easing: "easeOutExpo",
                    duration: 1000,
                    loop: 0, // DEBUG remove for production
                })
                .add({
                    targets: ".wrapper, #layer7 g rect, #layer2 text", // bars and Paul Banks
                    translateX: [-50, 0],
                    opacity: [0, 1],
                    rotate: ["-45 deg", 0],
                    delay: anime.stagger(150),
                })
                .add(
                    {
                        targets: "#layer4 text", // Handyman Services
                        easing: "spring(1, 80, 10, 0)",
                        opacity: [0, 1],
                        translateX: [-25, 0],
                        rotate: ["-45deg", 0],
                        delay: anime.stagger(150),
                    },
                    "-=2000",
                )
                .add(
                    {
                        targets: ".enterBtn",
                        // easing: "linear",
                        opacity: [0, 1],
                        translateY: [50, 0],
                    },
                    "-=2000",
                );
        }, 500);
    });
</script>

<div class="wrapper">
    <div class="svg-container">
        {#if $colorMode == "dark"}
            <svg
                width="210"
                height="30"
                version="1.1"
                id="svg1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg"
                viewBox="0 0 55.562498 7.9375"
            >
                <defs id="defs1" />
                <g id="layer7">
                    <g
                        id="g28"
                        transform="matrix(0.5,0,0,0.5,-0.0373044,0.01408992)"
                    >
                        <rect
                            style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.387176;stroke-opacity:1"
                            id="rect28-9-3"
                            width="1.8923999"
                            height="8.340538"
                            x="3.0673487"
                            y="0.13159476"
                        />
                        <rect
                            style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.387176;stroke-opacity:1"
                            id="rect28-9-3-3"
                            width="1.8923999"
                            height="8.340538"
                            x="0.077644289"
                            y="0.13141993"
                        />
                    </g>
                </g>
                <g id="layer4" style="fill:#ffffff;stroke:#ffffff">
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:16.9333px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.264999;stroke-opacity:1"
                        x="36.226585"
                        y="59.427673"
                        id="text10"
                        ><tspan
                            id="tspan10"
                            style="stroke-width:0.265"
                            x="36.226585"
                            y="59.427673"
                        /></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="23.837246"
                        y="7.209271"
                        id="text11"
                    >
                        <tspan
                            id="tspan11"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="23.837246"
                            y="7.209271">H</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="25.74297"
                        y="7.2113023"
                        id="text12"
                    >
                        <tspan
                            id="tspan12"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="25.74297"
                            y="7.2113023">a</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="27.648907"
                        y="7.2094951"
                        id="text13"
                    >
                        <tspan
                            id="tspan13"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="27.648907"
                            y="7.2094951">n</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="29.553469"
                        y="7.2096334"
                        id="text14"
                    >
                        <tspan
                            id="tspan14"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="29.553469"
                            y="7.2096334">d</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="31.458643"
                        y="7.209805"
                        id="text15"
                    >
                        <tspan
                            id="tspan15"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="31.458643"
                            y="7.209805">y</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="33.362331"
                        y="7.2109332"
                        id="text16"
                    >
                        <tspan
                            id="tspan16"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="33.362331"
                            y="7.2109332">m</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="35.257908"
                        y="7.2076354"
                        id="text17"
                    >
                        <tspan
                            id="tspan17"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="35.257908"
                            y="7.2076354">a</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="37.166553"
                        y="7.2086377"
                        id="text18"
                    >
                        <tspan
                            id="tspan18"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="37.166553"
                            y="7.2086377">n</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="40.441914"
                        y="7.2066903"
                        id="text19"
                    >
                        <tspan
                            id="tspan19"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="40.441914"
                            y="7.2066903">S</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="42.350491"
                        y="7.2071662"
                        id="text20"
                    >
                        <tspan
                            id="tspan20"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="42.350491"
                            y="7.2071662">e</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="44.253216"
                        y="7.2075906"
                        id="text21"
                    >
                        <tspan
                            id="tspan21"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="44.253216"
                            y="7.2075906">r</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="46.160931"
                        y="7.2068372"
                        id="text22"
                    >
                        <tspan
                            id="tspan22"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="46.160931"
                            y="7.2068372">v</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="48.063747"
                        y="7.2075086"
                        id="text23"
                    >
                        <tspan
                            id="tspan23"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="48.063747"
                            y="7.2075086">i</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="49.968273"
                        y="7.2077336"
                        id="text24"
                    >
                        <tspan
                            id="tspan24"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="49.968273"
                            y="7.2077336">c</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="51.873951"
                        y="7.208035"
                        id="text25"
                    >
                        <tspan
                            id="tspan25"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="51.873951"
                            y="7.208035">e</tspan
                        >
                    </text>
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.1325;stroke-opacity:1"
                        x="53.775341"
                        y="7.2123361"
                        id="text26"
                    >
                        <tspan
                            id="tspan26"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325"
                            x="53.775341"
                            y="7.2123361">s</tspan
                        >
                    </text>
                    <g id="g29">
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264999;stroke-opacity:1"
                            x="59.047821"
                            y="27.549639"
                            id="text27"
                            ><tspan
                                id="tspan27"
                                style="stroke-width:0.265"
                                x="59.047821"
                                y="27.549639"
                            /></text
                        >
                    </g>
                </g>
                <g id="layer2">
                    <g
                        id="g30"
                        transform="matrix(0.5,0,0,0.5,-0.74562031,0.0793569)"
                    >
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;stroke:#ffffff;stroke-width:0.264999"
                            x="7.3981075"
                            y="8.4235249"
                            id="text1"
                        >
                            <tspan
                                id="tspan1"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.265;stroke-opacity:1"
                                x="7.3981075"
                                y="8.4235249">P</tspan
                            >
                        </text>
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="15.020102"
                            y="8.4189186"
                            id="text2"
                        >
                            <tspan
                                id="tspan2"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="15.020102"
                                y="8.4189186">A</tspan
                            >
                        </text>
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="22.629858"
                            y="8.4249315"
                            id="text3"
                        >
                            <tspan
                                id="tspan3"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="22.629858"
                                y="8.4249315">U</tspan
                            >
                        </text>
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="55.95916"
                            y="8.4208355"
                            id="text7"
                        >
                            <tspan
                                id="tspan7"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="55.95916"
                                y="8.4208355">N</tspan
                            >
                        </text>
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="63.585388"
                            y="8.4320927"
                            id="text8"
                        >
                            <tspan
                                id="tspan8"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="63.585388"
                                y="8.4320927">K</tspan
                            >
                        </text>
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="30.256056"
                            y="8.4351063"
                            id="text4"
                        >
                            <tspan
                                id="tspan4"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="30.256056"
                                y="8.4351063">L</tspan
                            >
                        </text>
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="40.734955"
                            y="8.4336319"
                            id="text5"
                        >
                            <tspan
                                id="tspan5"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="40.734955"
                                y="8.4336319">B</tspan
                            >
                        </text>
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="48.346607"
                            y="8.4316168"
                            id="text6"
                        >
                            <tspan
                                id="tspan6"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="48.346607"
                                y="8.4316168">A</tspan
                            >
                        </text>
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="71.200333"
                            y="8.4257269"
                            id="text9"
                        >
                            <tspan
                                id="tspan9"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="71.200333"
                                y="8.4257269">S</tspan
                            >
                        </text>
                    </g>
                </g>
                <g id="layer1" />
            </svg>
        {:else}
            <!-- Created with Inkscape (http://www.inkscape.org/) -->

            <svg
                width="210"
                height="30"
                viewBox="0 0 55.562498 7.9375"
                version="1.1"
                id="svg1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs id="defs1" />
                <g id="layer7">
                    <g
                        id="g28"
                        transform="matrix(0.5,0,0,0.5,-0.0373044,0.01408992)"
                        style="stroke:#000000;fill:#000000"
                    >
                        <rect
                            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.387176;stroke-opacity:1"
                            id="rect28-9-3"
                            width="1.8923999"
                            height="8.340538"
                            x="3.0673487"
                            y="0.13159476"
                        />
                        <rect
                            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.387176;stroke-opacity:1"
                            id="rect28-9-3-3"
                            width="1.8923999"
                            height="8.340538"
                            x="0.077644289"
                            y="0.13141993"
                        />
                    </g>
                </g>
                <g id="layer4" style="fill:#ffffff;stroke:#ffffff">
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:16.9333px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.264999;stroke-opacity:1"
                        x="36.226585"
                        y="59.427673"
                        id="text10"
                        ><tspan
                            id="tspan10"
                            style="stroke-width:0.265"
                            x="36.226585"
                            y="59.427673"
                        /></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="23.837246"
                        y="7.209271"
                        id="text11"
                        ><tspan
                            id="tspan11"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="23.837246"
                            y="7.209271">H</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="25.74297"
                        y="7.2113023"
                        id="text12"
                        ><tspan
                            id="tspan12"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="25.74297"
                            y="7.2113023">a</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="27.648907"
                        y="7.2094951"
                        id="text13"
                        ><tspan
                            id="tspan13"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="27.648907"
                            y="7.2094951">n</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="29.553469"
                        y="7.2096334"
                        id="text14"
                        ><tspan
                            id="tspan14"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="29.553469"
                            y="7.2096334">d</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="31.458643"
                        y="7.209805"
                        id="text15"
                        ><tspan
                            id="tspan15"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="31.458643"
                            y="7.209805">y</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="33.362331"
                        y="7.2109332"
                        id="text16"
                        ><tspan
                            id="tspan16"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="33.362331"
                            y="7.2109332">m</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="35.257908"
                        y="7.2076354"
                        id="text17"
                        ><tspan
                            id="tspan17"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="35.257908"
                            y="7.2076354">a</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="37.166553"
                        y="7.2086377"
                        id="text18"
                        ><tspan
                            id="tspan18"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="37.166553"
                            y="7.2086377">n</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="40.441914"
                        y="7.2066903"
                        id="text19"
                        ><tspan
                            id="tspan19"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="40.441914"
                            y="7.2066903">S</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="42.350491"
                        y="7.2071662"
                        id="text20"
                        ><tspan
                            id="tspan20"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="42.350491"
                            y="7.2071662">e</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="44.253216"
                        y="7.2075906"
                        id="text21"
                        ><tspan
                            id="tspan21"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="44.253216"
                            y="7.2075906">r</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="46.160931"
                        y="7.2068372"
                        id="text22"
                        ><tspan
                            id="tspan22"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="46.160931"
                            y="7.2068372">v</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="48.063747"
                        y="7.2075086"
                        id="text23"
                        ><tspan
                            id="tspan23"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="48.063747"
                            y="7.2075086">i</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="49.968273"
                        y="7.2077336"
                        id="text24"
                        ><tspan
                            id="tspan24"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="49.968273"
                            y="7.2077336">c</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="51.873951"
                        y="7.208035"
                        id="text25"
                        ><tspan
                            id="tspan25"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="51.873951"
                            y="7.208035">e</tspan
                        ></text
                    >
                    <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1325;stroke-opacity:1"
                        x="53.775341"
                        y="7.2123361"
                        id="text26"
                        ><tspan
                            id="tspan26"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.175px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.1325;stroke:#000000;fill:#000000"
                            x="53.775341"
                            y="7.2123361">s</tspan
                        ></text
                    >
                    <g id="g29">
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264999;stroke-opacity:1"
                            x="59.047821"
                            y="27.549639"
                            id="text27"
                            ><tspan
                                id="tspan27"
                                style="stroke-width:0.265"
                                x="59.047821"
                                y="27.549639"
                            /></text
                        >
                    </g>
                </g>
                <g id="layer2">
                    <g
                        id="g30"
                        transform="matrix(0.5,0,0,0.5,-0.74562031,0.0793569)"
                    >
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;stroke:#ffffff;stroke-width:0.264999"
                            x="7.3981075"
                            y="8.4235249"
                            id="text1"
                            ><tspan
                                id="tspan1"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.265;stroke-opacity:1"
                                x="7.3981075"
                                y="8.4235249">P</tspan
                            ></text
                        >
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="15.020102"
                            y="8.4189186"
                            id="text2"
                            ><tspan
                                id="tspan2"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="15.020102"
                                y="8.4189186">A</tspan
                            ></text
                        >
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="22.629858"
                            y="8.4249315"
                            id="text3"
                            ><tspan
                                id="tspan3"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="22.629858"
                                y="8.4249315">U</tspan
                            ></text
                        >
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="55.95916"
                            y="8.4208355"
                            id="text7"
                            ><tspan
                                id="tspan7"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="55.95916"
                                y="8.4208355">N</tspan
                            ></text
                        >
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="63.585388"
                            y="8.4320927"
                            id="text8"
                            ><tspan
                                id="tspan8"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="63.585388"
                                y="8.4320927">K</tspan
                            ></text
                        >
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="30.256056"
                            y="8.4351063"
                            id="text4"
                            ><tspan
                                id="tspan4"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="30.256056"
                                y="8.4351063">L</tspan
                            ></text
                        >
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="40.734955"
                            y="8.4336319"
                            id="text5"
                            ><tspan
                                id="tspan5"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="40.734955"
                                y="8.4336319">B</tspan
                            ></text
                        >
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="48.346607"
                            y="8.4316168"
                            id="text6"
                            ><tspan
                                id="tspan6"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="48.346607"
                                y="8.4316168">A</tspan
                            ></text
                        >
                        <text
                            xml:space="preserve"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f37022;fill-opacity:1;stroke:#f37022;stroke-width:0.264999;stroke-opacity:1"
                            x="71.200333"
                            y="8.4257269"
                            id="text9"
                            ><tspan
                                id="tspan9"
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:12.7px;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.265"
                                x="71.200333"
                                y="8.4257269">S</tspan
                            ></text
                        >
                    </g>
                </g>
                <g id="layer1" />
            </svg>
        {/if}
    </div>
</div>
<div class="enter">
    <a href="/home" class="btn outline enterBtn">Enter Site</a>
</div>

<style>
    svg {
        transform: scale(2);
        backface-visibility: hidden;

        @media screen and (max-width: 350px) {
            transform: scale(1.2);
        }
        @media screen and (max-width: 500px) {
            transform: scale(1.5);
        }

        @media screen and (min-width: 768px) {
            transform: scale(4);
        }
    }

    .svg-container {
        height: 300px;
        display: flex;
        align-items: center;
        /* display: block; */
        justify-content: center;
        /* background: #000; */
        overflow: hidden;
    }

    .wrapper {
        opacity: 0;
        /* width: 90%; */
        margin: 5em, auto, auto, auto;
        display: block;
        text-align: center;
        overflow: hidden;
        /* margin: auto; */
    }

    .enterBtn {
        display: block;
        border: 1px solid #f37022;
        border-radius: 1em;
        width: 150px;
        margin: auto;
        text-align: center;
        opacity: 0;
    }
    .enterBtn:hover {
        transform: scale(1.1);
        color: #f37022;
    }
</style>
