<template>
  <section class="container mx-auto mt-24 [&>div]:about-block px-4">
    <div class="grid md:grid-cols-4 grid-cols-1">
      <div class="col-span-3 md:order-none order-last">
        <h2>Exploring the Universe through Code and Creativity</h2>
        <p>
          Welcome to my corner of the internet! I'm
          <span class="text-mars-primary">Enzo Kuo</span>, a passionate
          individual with a heart for exploration, both on Earth and beyond.
          When I'm not lost in lines of code, you'll find me engaged in a
          variety of hobbies that fuel my curiosity and zest for life. Here are
          some of my interests:
        </p>
        <ul class="list-disc ml-4 font-bold">
          <li>Playing boardgames</li>
          <li>Ice skating</li>
          <li>Snowboarding</li>
          <li>Photography</li>
          <li>Watching sports</li>
        </ul>
      </div>
      <div class="avatar"><NuxtImg src="/img/avatar.png" alt="avatar" /></div>
    </div>
    <div>
      <h2>What to Expect Here: A Unique Blend of Passion</h2>
      <p>
        This website is a reflection of my multifaceted interests and serves as
        a portal into the realm of space exploration. Here, I combine my love
        for coding with my fascination for the cosmos, specifically NASA's Mars
        Rover mission.
        <span class="text-mars-primary"
          >This space is dedicated to interacting with NASA's public API to
          curate a gallery of mesmerizing images captured on the Martian
          landscape.</span
        >
      </p>
    </div>
    <div>
      <h2>Journey into the Cosmos: Unveiling Mars Through Photos</h2>
      <p>
        Embark on a visual journey with me as we explore Mars through the lens
        of the Mars Rover. This isn't just a collection of pictures;
        <span class="text-mars-primary"
          >it's a curated experience that provides details about each image,
          including the camera used and the landing date.</span
        >
        It's a blend of technology, creativity, and the sheer wonder of our
        universe.
      </p>
    </div>
    <div class="[&>div]:mt-4">
      <h2>Navigating the Challenges: A Developer's Odyssey</h2>
      <p>
        Embarking on the journey of developing this Mars Rover mission gallery
        wasn't without its challenges. As I delved into the world of web
        development and exploration of NASA's API, I encountered obstacles that
        tested my skills and ingenuity. Here's a glimpse into the challenges I
        faced and the solutions that fueled my growth:
      </p>
      <div>
        <h3>Challenge 1:</h3>
        <p>Having zero experience in Nuxt.js posed a initial hurdle</p>
        <p class="mt-2">
          <span class="font-bold">Solution:</span> Determined to overcome this,
          I immersed myself in learning resources. I turned to YouTube tutorials
          and diligently went through the official documentation.
          <span class="text-mars-primary"
            >Drawing parallels with my prior experience with Next.js for React,
            the learning curve became more manageable,</span
          >
          and I found myself navigating the intricacies of Nuxt.js with newfound
          confidence.
        </p>
      </div>
      <div>
        <h3>Challenge 2:</h3>
        <p>
          In Vue.js, when you navigate away from a page and then back to it, the
          component is destroyed and then re-created, which means the script
          section of the component is executed again. This is the default
          behavior and is part of how Vue's reactivity system works.
        </p>
        <p class="mt-2">
          <span class="font-bold">Thought:</span> Recognizing the need to
          preserve the fetched data across page transitions, I came up a
          strategy of storing the initial page of NASA's API in the local
          storage.
          <span class="text-mars-primary"
            >This not only prevents unnecessary API calls but also streamlines
            the user experience by maintaining data consistency when navigating
            between pages.</span
          >
        </p>
      </div>
    </div>
    <div>
      <h2>Let's Connect!</h2>
      <p>
        I believe in the power of connection, and I'm excited to share this
        space with fellow explorers, tech enthusiasts, and anyone curious about
        the wonders of Mars. Feel free to reach out, share your thoughts, or
        embark on this cosmic journey together.
      </p>
      <p>
        Thanks for stopping by, and I hope you enjoy the blend of code,
        creativity, and curiosity that defines this space.
      </p>
    </div>
    <div>
      <p>Happy exploring!</p>
      <p>Enzo Kuo</p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
