<template>
<!-- Basic app page to sit on the site for now -->
  <div id="app">
    <div class="container project-header">
      <div class="columns is-vcentered">
        <div class="column is-one-half">
          <div id="main" class="pull-right">
            <h1 class="project-title">VRKit<strong class="has-text-primary">.</strong> </h1>
            <h2 class="subtitle has-text-weight-medium">
              Google Cardboard Meets Positional Tracking
            </h2>
            <a class="button-primary" href="https://github.com/Atomator/VRKit">
              <a class="icon">
                <img src="../../assets/media icons/github.svg" class="logo">
              </a>
            </a>
            <a class="button-primary" href="https://medium.com/@coloradolego/how-to-use-arkit-and-unity-to-create-6dof-mobile-vr-f03de54e2edd">
              <a class="icon">
                <img src="../../assets/media icons/medium.svg" class="logo">
              </a>
            </a>
            <a class="button-primary" href="https://www.youtube.com/watch?v=1seLu90q7wE">
              <a class="icon">
                <img src="../../assets/media icons/youtube.svg" class="logo">
              </a>
              <!-- <p class="has-text-weight-bold">Explore</p> -->
            </a>
          </div>  
        </div>
        <div class="column is-one-half has-text-centered">
          <img class="is-vertical-center" src="../../assets/plank.svg" width="40%">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="tile-centered-primary">
        <p class="title-light" style="margin-bottom: 5px;">Skills</p>
        <p class="has-text-white-ter" style="margin-bottom: 30px;">Unity, C#, Blender, ARKit, Google Cardboard</p>
        <p class="title-light" style="margin-bottom: 5px;">Project Duration</p>
        <p class="has-text-white-ter">June 2019 - August 2019</p>
      </div>
    </div>
    <div class="container has-text-centered">
      <p class="section-title-primary">Why</p>
      <br>
      <p>Virtual Reality captured my interest ever since I donned my first Oculus Rift at a Best Buy over 4 years ago. The experience captivated me and the technology fascinated me, but sadly, my wallet disappointed me. Unable to afford a headset (let alone a PC to drive it). <br><br> I needed another solution if I was to explore the wonders of VR. </p>
    </div>
    <div class="container has-text-centered">
      <div class="tile-column-dark">
        <div class="column is-half is-centered">
          <img class="is-vertical-center" src="../../assets/arkit.svg">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="374.75" height="60%" viewBox="0 0 374.75 716.476">
            <defs>
              <filter id="Fill-1" x="0" y="0" width="374.75" height="716.476" filterUnits="userSpaceOnUse">
                <feOffset dx="10" dy="10" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="5" result="blur"/>
                <feFlood flood-opacity="0.161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
              <clipPath id="clip-path">
                <rect id="Rectangle_60" data-name="Rectangle 60" width="89.423" height="102.734" fill="none"/>
              </clipPath>
              <clipPath id="clip-path-2">
                <rect id="Rectangle_51" data-name="Rectangle 51" width="45.038" height="27.023" fill="none"/>
              </clipPath>
              <clipPath id="clip-path-3">
                <rect id="Rectangle_52" data-name="Rectangle 52" width="87.583" height="51.671" fill="none"/>
              </clipPath>
              <clipPath id="clip-path-4">
                <rect id="Rectangle_53" data-name="Rectangle 53" width="44.979" height="27.023" fill="none"/>
              </clipPath>
              <clipPath id="clip-path-6">
                <rect id="Rectangle_55" data-name="Rectangle 55" width="45.038" height="27.082" fill="none"/>
              </clipPath>
              <clipPath id="clip-path-7">
                <rect id="Rectangle_56" data-name="Rectangle 56" width="44.979" height="27.082" fill="none"/>
              </clipPath>
              <clipPath id="clip-path-8">
                <rect id="Rectangle_57" data-name="Rectangle 57" width="2.434" height="51.671" fill="none"/>
              </clipPath>
              <clipPath id="clip-path-9">
                <rect id="Rectangle_58" data-name="Rectangle 58" width="2.449" height="51.671" fill="none"/>
              </clipPath>
              <clipPath id="clip-path-10">
                <rect id="Rectangle_59" data-name="Rectangle 59" width="2.434" height="100.761" fill="none"/>
              </clipPath>
            </defs>
            <g id="Group_48" data-name="Group 48" transform="translate(-396 -2498.224)">
              <g id="iPhone" transform="translate(115 2430.224)">
                <g transform="matrix(1, 0, 0, 1, 281, 68)" filter="url(#Fill-1)">
                  <path id="Fill-1-2" data-name="Fill-1" d="M325.7,342.305q0-141.237,0-282.473c0-1.694.022-3.391-.041-5.083a35.506,35.506,0,0,0-35.193-34.315c-9.751-.1-19.5-.035-29.257-.014-4.029.009-5.807,1.652-6.192,5.626-.2,2.107-.285,4.229-.557,6.327a12.131,12.131,0,0,1-6.961,9.612,14.439,14.439,0,0,1-6.781,1.326q-67.738-.037-135.475-.018c-.53,0-1.06.01-1.59-.005A12.546,12.546,0,0,1,91.373,32.519c-.332-2.193-.395-4.426-.607-6.638-.384-3.99-1.916-5.446-5.913-5.457-9.752-.028-19.509-.18-29.257.037-12.93.289-22.9,6.107-29.884,16.957-4.087,6.353-5.4,13.438-5.4,20.907q.037,283.584.02,567.169a19.891,19.891,0,0,0,.03,2.857c.489,3.341.713,6.773,1.664,9.985a35.3,35.3,0,0,0,34.048,25.189q49.134.072,98.267.016c45.158,0,90.317.1,135.475-.055,15.362-.052,26.321-7.554,32.931-21.342,2.476-5.165,2.97-10.734,2.968-16.412q-.047-141.713-.022-283.426Zm15.235-183.691c3.679.9,3.811,1.041,3.812,4.541q.012,33.843,0,67.685c0,3.643-.1,3.751-3.813,4.825v4.349q0,196.223.023,392.445c0,12.192-3.432,23.193-10.845,32.836-9.069,11.8-21.019,18.808-35.867,20.671a56.234,56.234,0,0,1-6.962.485q-115.45.038-230.9.013A53.157,53.157,0,0,1,4.038,645.116,60.783,60.783,0,0,1,2.621,631.9c-.143-21.078-.065-42.157-.065-63.236q0-155.389,0-310.778a24.246,24.246,0,0,0-.044-3.173,2.742,2.742,0,0,0-.843-1.814c-1.5-.952-1.664-2.313-1.663-3.856q.019-21.449,0-42.9c0-1.54.182-2.879,1.644-3.873a3.063,3.063,0,0,0,.864-2.123c.122-1.792.009-3.6.052-5.4a3.776,3.776,0,0,0-1.474-3.513c-.828-.666-1.029-2.454-1.036-3.742-.071-12.71-.043-25.421-.043-38.132,0-1.271.024-2.543-.005-3.813-.04-1.743.036-3.356,1.833-4.41.454-.266.679-1.247.684-1.9.049-6.355.059-12.711-.013-19.065a2.9,2.9,0,0,0-.948-2.069,3.908,3.908,0,0,1-1.554-3.6c.015-5.932-.043-11.864.051-17.795.017-1.078.29-2.653,1.013-3.118,1.6-1.032,1.49-2.359,1.489-3.83C2.555,77.582,2.432,65.4,2.594,53.22c.2-15,5.647-27.892,16.5-38.313A51.252,51.252,0,0,1,55.553.07Q171.8-.069,288.043.051A53.19,53.19,0,0,1,340.3,45.332a62.085,62.085,0,0,1,.6,8.853q.062,50.208.026,100.415Z" transform="translate(5 5)" fill="#465362" fill-rule="evenodd"/>
                </g>
                <path id="Background" d="M0,0H307V646H0Z" transform="translate(306 92.476)" fill="rgba(247,247,255,0.5)"/>
                <path id="Fill-1-3" data-name="Fill-1" d="M325.7,342.305q0-141.237,0-282.473c0-1.694.022-3.391-.041-5.083a35.506,35.506,0,0,0-35.193-34.315c-9.751-.1-19.5-.035-29.257-.014-4.029.009-5.807,1.652-6.192,5.626-.2,2.107-.285,4.229-.557,6.327a12.131,12.131,0,0,1-6.961,9.612,14.439,14.439,0,0,1-6.781,1.326q-67.738-.037-135.475-.018c-.53,0-1.06.01-1.59-.005A12.546,12.546,0,0,1,91.373,32.519c-.332-2.193-.395-4.426-.607-6.638-.384-3.99-1.916-5.446-5.913-5.457-9.752-.028-19.509-.18-29.257.037-12.93.289-22.9,6.107-29.884,16.957-4.087,6.353-5.4,13.438-5.4,20.907q.037,283.584.02,567.169a19.891,19.891,0,0,0,.03,2.857c.489,3.341.713,6.773,1.664,9.985a35.3,35.3,0,0,0,34.048,25.189q49.134.072,98.267.016c45.158,0,90.317.1,135.475-.055,15.362-.052,26.321-7.554,32.931-21.342,2.476-5.165,2.97-10.734,2.968-16.412q-.047-141.713-.022-283.426Zm15.235-183.691c3.679.9,3.811,1.041,3.812,4.541q.012,33.843,0,67.685c0,3.643-.1,3.751-3.813,4.825v4.349q0,196.223.023,392.445c0,12.192-3.432,23.193-10.845,32.836-9.069,11.8-21.019,18.808-35.867,20.671a56.234,56.234,0,0,1-6.962.485q-115.45.038-230.9.013A53.157,53.157,0,0,1,4.038,645.116,60.783,60.783,0,0,1,2.621,631.9c-.143-21.078-.065-42.157-.065-63.236q0-155.389,0-310.778a24.246,24.246,0,0,0-.044-3.173,2.742,2.742,0,0,0-.843-1.814c-1.5-.952-1.664-2.313-1.663-3.856q.019-21.449,0-42.9c0-1.54.182-2.879,1.644-3.873a3.063,3.063,0,0,0,.864-2.123c.122-1.792.009-3.6.052-5.4a3.776,3.776,0,0,0-1.474-3.513c-.828-.666-1.029-2.454-1.036-3.742-.071-12.71-.043-25.421-.043-38.132,0-1.271.024-2.543-.005-3.813-.04-1.743.036-3.356,1.833-4.41.454-.266.679-1.247.684-1.9.049-6.355.059-12.711-.013-19.065a2.9,2.9,0,0,0-.948-2.069,3.908,3.908,0,0,1-1.554-3.6c.015-5.932-.043-11.864.051-17.795.017-1.078.29-2.653,1.013-3.118,1.6-1.032,1.49-2.359,1.489-3.83C2.555,77.582,2.432,65.4,2.594,53.22c.2-15,5.647-27.892,16.5-38.313A51.252,51.252,0,0,1,55.553.07Q171.8-.069,288.043.051A53.19,53.19,0,0,1,340.3,45.332a62.085,62.085,0,0,1,.6,8.853q.062,50.208.026,100.415Z" transform="translate(286 73)" fill="#f7f7ff" fill-rule="evenodd"/>
              </g>
              <g id="Group_42" data-name="Group 42" transform="translate(528.492 2730.208)">
                <g id="Group_34" data-name="Group 34" transform="translate(0 0)" clip-path="url(#clip-path)">
                  <path id="Path_9" data-name="Path 9" d="M282.6,184.691a2.137,2.137,0,0,1-1.068-.282l-11.323-6.559-11.367,6.559a2.141,2.141,0,1,1-2.137-3.71l12.45-7.138a2.122,2.122,0,0,1,2.137,0l12.391,7.168a2.137,2.137,0,0,1-1.068,3.992" transform="translate(-225.486 -173.25)" fill="#f7f7ff"/>
                  <path id="Path_10" data-name="Path 10" d="M292.515,329.23a2.137,2.137,0,0,1-2.137-2.211V312.743a2.137,2.137,0,1,1,4.274,0v14.276a2.137,2.137,0,0,1-2.137,2.137" transform="translate(-247.788 -261.413)" fill="#f7f7ff"/>
                  <path id="Path_11" data-name="Path 11" d="M173.563,260.454a2.137,2.137,0,0,1-2.137-2.137V243.982a2.137,2.137,0,1,1,4.274,0v14.335a2.137,2.137,0,0,1-2.137,2.137" transform="translate(-171.426 -217.271)" fill="#f7f7ff"/>
                  <path id="Path_12" data-name="Path 12" d="M411.347,260.454a2.137,2.137,0,0,1-2.137-2.137V243.982a2.137,2.137,0,1,1,4.274,0v14.335a2.137,2.137,0,0,1-2.137,2.137" transform="translate(-324.075 -217.271)" fill="#f7f7ff"/>
                  <path id="Path_13" data-name="Path 13" d="M411.388,357.912a2.137,2.137,0,0,1-2.137-2.093V341.425a2.137,2.137,0,0,1,2.137-2.137h0a2.137,2.137,0,0,1,2.137,2.137v14.394a2.137,2.137,0,0,1-2.137,2.137Z" transform="translate(-324.102 -279.826)" fill="#f7f7ff"/>
                  <path id="Path_14" data-name="Path 14" d="M173.563,357.912a2.137,2.137,0,0,1-2.137-2.093V341.425a2.137,2.137,0,1,1,4.274,0v14.394a2.137,2.137,0,0,1-2.137,2.137" transform="translate(-171.426 -279.826)" fill="#f7f7ff"/>
                  <path id="Path_15" data-name="Path 15" d="M292.517,193.108a2.137,2.137,0,0,1-2.137-2.137V175.345a2.137,2.137,0,1,1,4.274,0v15.626a2.137,2.137,0,0,1-2.137,2.137" transform="translate(-247.791 -173.209)" fill="#f7f7ff"/>
                  <path id="Path_16" data-name="Path 16" d="M292.517,426.726a2.137,2.137,0,0,1-2.137-2.137v-14.32a2.137,2.137,0,1,1,4.274,0V424.6a2.137,2.137,0,0,1-2.137,2.122" transform="translate(-247.791 -324.022)" fill="#f7f7ff"/>
                  <path id="Path_17" data-name="Path 17" d="M270.159,439.6a2.151,2.151,0,0,1-1.068-.282l-12.465-7.138a2.141,2.141,0,1,1,2.137-3.71l11.412,6.6,11.248-6.515a2.137,2.137,0,0,1,2.137,3.621l-12.317,7.138a2.122,2.122,0,0,1-1.068.282" transform="translate(-225.433 -336.892)" fill="#f7f7ff"/>
                  <path id="Path_18" data-name="Path 18" d="M270.212,301.995a2.152,2.152,0,0,1-1.068-.282l-12.436-7.182a2.141,2.141,0,1,1,2.137-3.71l11.367,6.559,11.323-6.559a2.137,2.137,0,0,1,2.137,3.7L271.281,301.7a2.122,2.122,0,0,1-1.068.282" transform="translate(-225.486 -248.528)" fill="#f7f7ff"/>
                  <path id="Path_19" data-name="Path 19" d="M376.683,253.321a2.137,2.137,0,0,1-1.068-3.992l12.406-7.168a2.141,2.141,0,0,1,2.137,3.71l-12.406,7.168a2.137,2.137,0,0,1-1.068.282" transform="translate(-301.817 -217.29)" fill="#f7f7ff"/>
                  <path id="Path_20" data-name="Path 20" d="M389.069,233.234a2.122,2.122,0,0,1-1.068-.282l-12.421-7.182a2.141,2.141,0,1,1,2.137-3.71l12.421,7.182a2.137,2.137,0,0,1-1.068,3.992" transform="translate(-301.797 -204.386)" fill="#f7f7ff"/>
                  <path id="Path_21" data-name="Path 21" d="M185.962,253.188a2.137,2.137,0,0,1-1.068-.282l-12.406-7.242a2.141,2.141,0,1,1,2.137-3.71l12.421,7.168a2.137,2.137,0,0,1-1.068,3.992" transform="translate(-171.419 -217.157)" fill="#f7f7ff"/>
                  <path id="Path_22" data-name="Path 22" d="M173.549,233.287a2.137,2.137,0,0,1-1.068-3.992l12.406-7.153a2.141,2.141,0,0,1,2.137,3.71l-12.406,7.093a2.152,2.152,0,0,1-1.068.282" transform="translate(-171.412 -204.439)" fill="#f7f7ff"/>
                  <path id="Path_23" data-name="Path 23" d="M376.641,390.8a2.137,2.137,0,0,1-1.068-3.992l12.436-7.167a2.141,2.141,0,1,1,2.137,3.71L377.71,390.52a2.137,2.137,0,0,1-1.068.282" transform="translate(-301.791 -305.548)" fill="#f7f7ff"/>
                  <path id="Path_24" data-name="Path 24" d="M389.069,370.783A2.122,2.122,0,0,1,388,370.5l-12.421-7.168a2.141,2.141,0,0,1,2.137-3.71l12.421,7.168a2.137,2.137,0,0,1-1.068,3.992" transform="translate(-301.797 -292.697)" fill="#f7f7ff"/>
                  <path id="Path_25" data-name="Path 25" d="M185.935,390.817a2.137,2.137,0,0,1-1.068-.282l-12.421-7.182a2.141,2.141,0,1,1,2.137-3.71L187,386.825a2.137,2.137,0,0,1-1.068,3.992" transform="translate(-171.392 -305.548)" fill="#f7f7ff"/>
                  <path id="Path_26" data-name="Path 26" d="M173.549,370.756a2.137,2.137,0,0,1-1.068-3.992l12.391-7.182a2.141,2.141,0,1,1,2.137,3.71l-12.391,7.168a2.137,2.137,0,0,1-1.068.282" transform="translate(-171.412 -292.67)" fill="#f7f7ff"/>
                  <g id="Group_17" data-name="Group 17" transform="translate(0.92 0.905)" opacity="0.2">
                    <g id="Group_16" data-name="Group 16" clip-path="url(#clip-path-2)">
                      <path id="Path_27" data-name="Path 27" d="M175.213,202.759a1.217,1.217,0,0,1-.608-2.27l42.59-24.589a1.217,1.217,0,1,1,1.217,2.107L175.822,202.6a1.217,1.217,0,0,1-.608.163" transform="translate(-173.997 -175.737)" fill="#f7f7ff"/>
                    </g>
                  </g>
                  <g id="Group_19" data-name="Group 19" transform="translate(0.92 25.494)" opacity="0.2">
                    <g id="Group_18" data-name="Group 18" clip-path="url(#clip-path-3)">
                      <path id="Path_28" data-name="Path 28" d="M175.213,296.086a1.217,1.217,0,0,1-.608-2.27l85.135-49.238a1.217,1.217,0,1,1,1.217,2.107l-85.135,49.238a1.217,1.217,0,0,1-.608.163" transform="translate(-173.997 -244.415)" fill="#f7f7ff"/>
                    </g>
                  </g>
                  <g id="Group_21" data-name="Group 21" transform="translate(43.51 0.905)" opacity="0.2">
                    <g id="Group_20" data-name="Group 20" clip-path="url(#clip-path-4)">
                      <path id="Path_29" data-name="Path 29" d="M336.711,202.786a1.217,1.217,0,0,1-.608-.163l-42.545-24.574a1.217,1.217,0,1,1,1.217-2.107L337.32,200.53a1.217,1.217,0,0,1-.608,2.27" transform="translate(-292.95 -175.763)" fill="#f7f7ff"/>
                    </g>
                  </g>
                  <g id="Group_23" data-name="Group 23" transform="translate(0.92 25.494)" opacity="0.2">
                    <g id="Group_22" data-name="Group 22" clip-path="url(#clip-path-3)">
                      <path id="Path_30" data-name="Path 30" d="M260.347,296.086a1.2,1.2,0,0,1-.608-.163L174.6,246.685a1.217,1.217,0,1,1,1.217-2.107l85.149,49.238a1.217,1.217,0,0,1-.608,2.27" transform="translate(-173.996 -244.415)" fill="#f7f7ff"/>
                    </g>
                  </g>
                  <g id="Group_25" data-name="Group 25" transform="translate(0.92 74.732)" opacity="0.2">
                    <g id="Group_24" data-name="Group 24" clip-path="url(#clip-path-6)">
                      <path id="Path_31" data-name="Path 31" d="M217.8,409.019a1.217,1.217,0,0,1-.608-.163L174.6,384.208a1.217,1.217,0,1,1,1.217-2.107l42.6,24.649a1.217,1.217,0,0,1-.608,2.27" transform="translate(-173.996 -381.937)" fill="#f7f7ff"/>
                    </g>
                  </g>
                  <g id="Group_27" data-name="Group 27" transform="translate(43.51 74.717)" opacity="0.2">
                    <g id="Group_26" data-name="Group 26" clip-path="url(#clip-path-7)">
                      <path id="Path_32" data-name="Path 32" d="M294.209,409.019a1.217,1.217,0,0,1-.608-2.27L336.13,382.1a1.217,1.217,0,1,1,1.217,2.107l-42.53,24.648a1.217,1.217,0,0,1-.608.163" transform="translate(-292.977 -381.922)" fill="#f7f7ff"/>
                    </g>
                  </g>
                  <g id="Group_29" data-name="Group 29" transform="translate(0.92 25.494)" opacity="0.2">
                    <g id="Group_28" data-name="Group 28" clip-path="url(#clip-path-8)">
                      <path id="Path_33" data-name="Path 33" d="M175.266,296.087a1.217,1.217,0,0,1-1.187-1.172V245.632a1.217,1.217,0,1,1,2.434,0v49.282a1.217,1.217,0,0,1-1.217,1.217" transform="translate(-174.049 -244.415)" fill="#f7f7ff"/>
                    </g>
                  </g>
                  <g id="Group_31" data-name="Group 31" transform="translate(86.055 25.494)" opacity="0.2">
                    <g id="Group_30" data-name="Group 30" clip-path="url(#clip-path-9)">
                      <path id="Path_34" data-name="Path 34" d="M413.038,296.087a1.217,1.217,0,0,1-1.217-1.217V245.632a1.217,1.217,0,1,1,2.434,0v49.282a1.217,1.217,0,0,1-1.217,1.217" transform="translate(-411.806 -244.415)" fill="#f7f7ff"/>
                    </g>
                  </g>
                  <g id="Group_33" data-name="Group 33" transform="translate(43.51 0.905)" opacity="0.2">
                    <g id="Group_32" data-name="Group 32" clip-path="url(#clip-path-10)">
                      <path id="Path_35" data-name="Path 35" d="M294.167,276.524a1.217,1.217,0,0,1-1.217-1.217V177a1.217,1.217,0,1,1,2.434,0v98.312a1.217,1.217,0,0,1-1.217,1.217" transform="translate(-292.95 -175.763)" fill="#f7f7ff"/>
                    </g>
                  </g>
                </g>
              </g>
              <text id="ARKit" transform="translate(573.457 2937.7)" fill="#f7f7ff" font-size="72" font-family="Arial, Avenir" font-weight="800"><tspan x="-100.008" y="0">ARKit</tspan></text>
            </g>
          </svg> -->

        </div>
        <div class="column is-half">
          <p class="has-text-light title-light" style="font-size: 50px !important; margin-bottom: 25px">What</p>
          <p class="has-text-white-ter has-text-left">A couple of years ago Apple released ARKit, an augmented reality framework that allowed for apps to be built using an iPhone’s camera to display and track a virtual object in real space using the camera and the phone’s screen. By using Unity and ARKit to overlay an entire virtual environment with a stereoscopic view so it could be viewed with a Google Cardboard, I was able to create a new type of mobile VR experience that allows for positional tracking on a phone. </p>
        </div>
      </div>
    </div>
    <div class="container has-text-centered">
      <p class="section-title-primary">Creation</p>
      <p class="has-text-dark title-dark" style="margin-bottom: 25px;">Idea</p>
      <p style="margin-bottom: 100px;">The purpose of the application was to act as a demo for positional tracking on mobile, meaning the experience created couldn’t rely on controllers. Using Richie’s Plank Experience as a guide, the app would start by having user based in a virtual city. From there they would enter an elevator that would begin to move up a building and when it reached the top they would be presented with a plank they could walk. The game would end when they fell and hit the ground.</p>
      <p class="has-text-dark title-dark" style="margin-bottom: 25px;">Timeline</p>
      <div class="timeline is-centered">
        <header class="timeline-header">
          <span class="tag is-medium is-primary has-text-white-ter" style="font-size: 20px; font-weight: 900; border-radius: 10px; padding: 0px 30px 0px 30px;">Start</span>
        </header>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Research</p>
            <p>Inspired by the project by Github Repository by Andrew Nakas I choose to use Unity as my workspace of choice with his work as a guide.</p>
          </div>
        </div>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content">
            <p class="heading">Nature Assets</p>
            <p>I started by testing the tracking by creating a nature environment using free Unity Assets, but it failed to convey the feelings of immersion that I wanted.</p>
          </div>
        </div>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Blender</p>
            <p>Even though I had never used Blender before I quickly learned the basics and I was able to create buildings for the city in under four days, and the city itself in under seven.</p>
          </div>
        </div>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content">
            <p class="heading">Placement</p>
            <p>Unity’s ARFoundation tutorial helped me to figure out how I was going to “place” the virtual environment in order to make sure the users height was correct.</p>
          </div>
        </div>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Moving Up</p>
            <p>At this point I created the elevator itself, having it close its doors and begin moving up upon user entry.</p>
          </div>
        </div>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content">
            <p class="heading">Falling Down</p>
            <p>I then added in “gravity” to allow the user to fall when the exit the elevator and then fall off the plank.</p>
          </div>
        </div>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">VR</p>
            <p>I then added in the VRKit (ARKit + GVR) SDK to allow for the user to trigger VR when inside the elevator.</p>
          </div>
        </div>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content">
            <p class="heading">UI</p>
            <p>Once the experience was completed I created a main menu system that the user was greeted with upon entering the app.</p>
          </div>
        </div>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">App</p>
            <p>Creating an app icon, I proceeded to load the final version onto my phone and then share my creation with others.</p>
          </div>
        </div>
        <header class="timeline-header" style="margin-bottom: 100px;">
          <span class="tag is-medium is-primary has-text-white-ter" style="font-size: 20px; font-weight: 900; border-radius: 10px; padding: 0px 30px 0px 30px;">End</span>
        </header>
      </div>
      <a class="button is-primary is-large has-shadow" style="margin-right: 0px;" href="https://www.youtube.com/watch?v=EKLHCKwgs-4&list=PLCseOl6jsv2oRbhZzk3ZvgrnswPK12wim">
        <a class="icon">
          <img src="../../assets/media icons/youtube.svg" class="logo">
        </a>
        <p class="has-text-weight-bold" style="margin-left: 10px;">Watch</p>
      </a>
    </div>
    <div class="container has-text-centered">
      <p class="section-title-primary">Challenges</p>
      <br>
      <p>When creating this project I was challenged in a variety of ways. Primarily I had to learn Unity, Blender, and C#, which were all items I had not had prior exposure to. This meant that I spent the majority of my time learning the softwares rather than creating the product. Having a limited amount of time also made it difficult to complete the project, as it meant working long days on a limited schedule. However, this did help me to improve both my time and project management, so the challenge was worth it. Small issues also popped up, forcing me to spend days fixing issues and creating features that only should has taken hours. Yet, this showed me how to push through in a project and why perseverance is so important.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vrkit'
}
</script>

<style scoped>
@import '../../assets/css/projects.css';

#welcomeMessage {
  font-weight: 900;
  font-size: 5.5em;

  /* Need a better way to manage the text spacing */
  margin-bottom: 50px;
}

.button {
  padding: 30px 35px 30px 35px;
  margin-right: 36px;
  margin-bottom: 35px;
  border-radius: 10px;
  box-shadow: 0 6px 6px rgba(10, 10, 10, 0.15);
}

.container {
  margin-bottom: 128px;
}

.is-centered img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* width: 40%; */
}


p {
    font-size: 18px;
    line-height: 45px;
}

@media only screen and (min-width: 768px) {

  .pull-right {
    float: right;
  }

  .container {
    margin-bottom: 128px;
  }

  .work-header {
    padding-top: 50px;
    min-height: calc(100vh - 100px);
  }

}

@media only screen and (max-width: 768px) {
  #main {
    text-align: center;
  }
  
  .button {
    margin: 35px 18px 35px 18px;
  }

  .work-header {
    padding: 15px;
  }
}

.column {
  display: flexbox;
}

</style>