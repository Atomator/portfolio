<template>
<!-- Basic app page to sit on the site for now -->
  <div id="app">
    <div class="container project-header">
      <div class="columns is-vcentered">
        <div class="column is-one-half">
          <div id="main" class="pull-right">
            <h1 class="project-title">Sentiment<strong class="has-text-primary">.</strong> </h1>
            <h2 class="subtitle has-text-weight-medium">
              Machine Learning. Meet Mental Health.
            </h2>
            <a class="button-primary" href="https://connorsparks.medium.com/ui-ux-design-for-a-micro-journaling-application-b74c9d2c8d1b">
              <a class="icon">
                <img src="../../assets/media icons/medium.svg" class="logo">
              </a>
            </a>
            <a class="button-primary" href="https://github.com/sentimentapp/application">
              <a class="icon">
                <img src="../../assets/media icons/github.svg" class="logo">
              </a>
            </a>
            <a class="button-primary" href="https://colab.research.google.com/drive/1bpvIRcNmKAKpKD1ZM3J7BPyiJtFysF1i#scrollTo=wv76z5nCerP4">
              <a class="has-text-white">
                Demo
              </a>
            </a>
          </div>  
        </div>
        <div class="column is-one-half has-text-centered">
          <img class="is-vertical-center" src="../../assets/images/sentiment-cover.png" width="60%">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="tile-centered-primary">
        <p class="title-light" style="margin-bottom: 5px;">Skills</p>
        <p class="has-text-white-ter" style="margin-bottom: 30px;">VueJS, HTML, CSS, CapacitorJS, Tensorflow/Keras</p>
        <p class="title-light" style="margin-bottom: 5px;">Project Duration</p>
        <p class="has-text-white-ter">June 2020 - December 2020</p>
      </div>
    </div>
    <div class="container has-text-centered">
      <p class="section-title-primary">Why</p>
      <br>
      <p>Throughout High School, I've had my struggles with mental health. In my battles against the forces of anxiety and depression, one weapon has always stuck with me: journaling. As a person, I can easily be consumed by my own thoughts, but journaling has helped to keep me grounded by forcing the dark ad ephemeral thoughts in my mind to become concrete and definable issues that I can tackle. So when I was offered the opportunity to intern with the Colorado School of Mine's Computing 4 Good (C4G) program, I drew upon my personal experience to propose that my team create Sentiment: a journaling app that uses machine learning to classify the emotions of entries to help the user track their mental state.</p>
    </div>
    <div class="container">
      <div class="tile-column-dark is-vcentered">
        <div class="column has-text-centered">
          <p class="has-text-light title-light" style="margin-bottom: 25px">The Team</p>
          <p class="has-text-light">During the C4G internship, I was paired with a group of four students and as such, it was important that we figured out our group dynamic from the get-go. As a team, we split into three micro-groups, each one responsible for a different aspect of the application: UI/UX, app development, and the machine learning model. While my "official" responsiblity was heading up the UI/UX team, I also worked with the app development and machine learning groups to help complete the application. As a group we also agreed to meet three times a week to check in on our progress, using Trello as our task manager of choice.</p>
        </div>
        <div class="column">
          <img src="../../assets/images/sentiment-trello.png" alt="sentiment-trello">
        </div>
      </div>
    </div>
    <div class="container has-text-centered">
     <p class="section-title-primary">UI/UX</p>
     <p>As the head of UI/UX design, it was my job to create the final mockup. My teammates would come up with ideas, and I would transform those ideas into reality. In order to make these concepts real, we went through three phases of design: drafting, wireframing, and mockups<p>
     <div class="columns">
      <div class="tile-centered-dark column ui-steps">
        <p class="has-text-light is-size-5">Drafting</p>
      </div>
      <div class="tile-centered-dark column ui-steps">
        <p class="has-text-light is-size-5">Wireframing</p>
      </div>
      <div class="tile-centered-dark column ui-steps">
        <p class="has-text-light is-size-5">Mockups</p>
      </div>
    </div>
    <p class="has-text-primary title-primary" style="margin-top: 64px; margin-bottom: 16px;">Drafting</p>
    <p>In the drafting phase of the project, the goal was to answer one simple question: how should design promote function? Or, in other words, how can the design of the application help fulfill its purpose of helping the user manage their mental health? So with question in mind, the group proceeded to come up with the following list of requirements for the app's design.</p>
    <div class="tile-centered-primary list-tile">
      <ul class="has-text-white">
        <p>• Calm colors encourage reflection</p>
        <p>• Adding entries is at the forefront of the design</p>
        <p>• The apps provides a simple summary of feelings</p>
        <p>• Minimal design creates a relaxing environment</p>
      </ul>
    </div>
    <p class="has-text-primary title-primary" style="margin-top: 128px; margin-bottom: 16px;">Wireframing</p>
    <p>In the wireframing step of the design process, the goal was to create "frames" for a potential design. These wireframes have little to no color and lack any specific design details. A wireframe is really just meant to give an idea of what the spacing of elements should look like before any additional elements are added.  Below are images of the wireframes that were created by two of my team members; much of my final design was based on their work.</p>
    <div class="columns" style="margin-top: 32px;">
      <div class="column">
        <img class="is-vertical-center" src="../../assets/images/sentiment-wireframe-1.jpg" width="100%">
      </div>
      <div class="column">
        <img class="is-vertical-center" src="../../assets/images/sentiment-wireframe-2.jpg" width="40%">
      </div>
    </div>
    <p class="has-text-primary title-primary" style="margin-top: 128px; margin-bottom: 16px;">Mockups</p>
    <p>After the wireframes were complete, it became my job to construct a mockup for the application. Unlike a wireframe, a mockup includes all of the colors and stylistic details that are going to be present in the final application. Using a tool called Figma, I created the design for the app using the wireframes made by other team members.</p>
    <br>
    <iframe style="display: block; margin: auto; height: 512px; border: 1px solid rgba(0, 0, 0, 0.1);  margin-top: 32px;" width="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvII04Xd1Q8r208ztIRiuIK%2FSentiment-Mockup%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
   </div>
   <div class="container has-text-centered">
    <p class="section-title-primary">Application</p>
    <p>In order to develop our application, our group decided to use CapacitorJS. Similar to ElectronJS, Capacitor allows for mobile applications to be built using nothing but HTML and CSS. While this choice of development platform meant that our application would run slower than if we wrote it natively, it did mean that we would be able to develop our application faster since nobody on our team had ever written a native mobile application before.<p/>
    <br>
    <p>Though I was not originally a part of the application development group, I quickly became invested in developing the actual application. With another group member handling the backend portion of the app, I became responsible for making sure that the UI/UX mockup that I created was reflected in the final product.</p>
    <br>
    <br>
    <iframe width="560" src="https://www.youtube.com/embed/Po-BH-1kRBw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="height: 350px; display: block; margin: auto;"></iframe>
    <a class="icon">
        <img src="../../assets/media icons/youtube.svg" class="logo">
    </a>
    <a class="has-text-white" style="margin-left: 16px">
        Demo
    </a>
   </div>
   <div class="container has-text-centered">
    <br>
    <p class="section-title-primary">ML Model</p>
    <p>During the project's official five-week period, I didn't contribute much to the machine learning portion of the application. I only wrote the code to load pre-trained GloVe word embeddings into our model, while another one of my much more talented group members wrote and trained the final model that would classify the emotions of the entries. However, once the project had officially wrapped up in July, I was curious if I was capable of creatomg my own machine learning model for the app: so, that's what I did.</p>
    <br>
    <br>
    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium is-primary has-text-white-ter" style="font-size: 20px; font-weight: 900; border-radius: 10px; padding: 0px 30px 0px 30px;">Start</span>
      </header>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content has-text-left">
          <p class="heading">Research</p>
          <p>In order to create a transformer, I first had to figure out how one worked. Referring to what I now consider to be the <a href="http://jalammar.github.io/illustrated-transformer/">Transformer Bible</a>, I took meticulous notes on  transformer architecture while also writing snippets of code in Juypter notebooks to make sure I understood.</p>
        </div>
      </div>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">Library or From Scratch?</p>
          <p>Once I had a good understanding of how a transformer worked, it was time to figure out how to create one. At first, I was simply going to use the <a href="https://huggingface.co/">HuggingFace</a> transformer library so I didn't have to actually write the model, but because I really wanted to understand how a transformer worked, I decided to write the model from scratch using a Keras <a href="https://blog.tensorflow.org/2019/05/transformer-chatbot-tutorial-with-tensorflow-2.html">tutorial</a> I had found during my research.</p>
        </div>
      </div>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content has-text-left">
          <p class="heading">Keras Functional API</p>
          <p>Once I had decided to write the model using Keras, I soon became obvious that I had another hurdle to overcome: the Keras Functional API. This API allow for developers to build custom layers and models within Keras that couldn't be written otherwise, and having never used it before, I had to learn it. To do this, I used the same strategy that I had with the transforme; I took notes on everything that I was confused about, and then I used Juypter notebooks to actually write out what was confusing me.</p>
        </div>
      </div>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">Data Preprocessing</p>
          <p>The dataset that I was using to train the model was formatted as a list of different text segments, each labeled with an emotion such as 'sadness' or 'joy'. However, computers can't exactly compute words. To solve this, I wrote a custom set of functions that used HuggingFace's BERT uncased dictionary to assign a numerical token to each word in an entry. These tokens were then passed to an embedding layer in the model that would transform the word from a single number to a vector of numbers.</p>
        </div>
      </div>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content has-text-left">
          <p class="heading">Writing the Model</p>
          <p>This part of the project was actually relatively easy thanks to the Keras <a href="https://blog.tensorflow.org/2019/05/transformer-chatbot-tutorial-with-tensorflow-2.html">tutorial</a> I had found earlier. However, I didn't want to simply copy and paste the code from the tutorial, so I instead hand re-coded all of the tutorial's code, commenting it as I went along to ensure that I actually understood what I was writing.</p>
        </div>
      </div>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">Training and Exporting the Model</p>
          <p>Once the model was written, the next step was to get it to actually classify the emotions in a text. So in order to do this, I simply trained different sizes of the model until I reached a nice balance between accuracy and model size. Then to export it, I used Tensorflow to convert the model to TensorflowJS so it could be used in the Sentiment application.</p>
        </div>
      </div>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content has-text-left">
          <p class="heading">Integration into Sentiment</p>
          <p>To integrate the model into the actual Sentiment application, I first had to rewrite my text preprocessing code in Javascript to ensure that the TensorflowJS model would receive the tokenized inputs. Once I finished with that, I used TensorflowJS to load in the model I had trained and pass the data through it. Thankfully, Sentiment already had placeholder code in place for the model, so as long as the model function returned an emotion, the previous code would handle the rest.</p>
        </div>
      </div> 
      <header class="timeline-header" style="margin-bottom: 100px;">
        <span class="tag is-medium is-primary has-text-white-ter" style="font-size: 20px; font-weight: 900; border-radius: 10px; padding: 0px 30px 0px 30px;">End</span>
      </header>
    </div>
    <div class="container has-text-centered">
      <p class="section-title-primary">Challenges</p>
      <br>
      <p>While this application is certainly one of the most fulfilling projects I've worked on, it wasn't without its challenges. Working with a group at the start of this project presented a couple of issues, the main one being the uneven distribution of work. On our team, we had a variety of people with a variety of different coding skill levels. As a result of this, group members such as myself ended up taking on a disproportionate amount of work leaving other members feeling a bit left out. To fix this in the future, I have to be okay with letting group members struggle on tasks that I could easily complete, offering guidance but not necessarily solutions, because only then will they be able to grow. During the independent portion of this project when I worked on the model, the main challenge for me was getting started. In my head, I had only intended for my transformer exploration to only take about a month at most, but instead, it had ended up taking almost the whole semester. I had been so obsessed with making sure that I wrote the perfect model, that I ended up spending too much time researching and not enough time writing the code. Though making sure I understand what I am doing is important, I want to try and find a balance between the two in the future so I can have both understanding and implementation.</p>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'sentiment'
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

.is-centered {
  display: flex !important;
  margin-left: auto;
  margin-right: auto;
}


p {
  font-size: 18px;
  line-height: 45px;
}

.ui-steps {
  margin: 64px 64px 64px 64px;
  padding: 8px;
  border-radius: 16px;
}

.list-tile{
  margin-top: 32px;
  width: 50%;
}

a.has-text-white:hover, a.has-text-white:focus {
    color: #F7F7FF !important;
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

  ul > p {
    font-size: 12px;
  }

.list-tile{
  width: 100%;
}

}

</style>