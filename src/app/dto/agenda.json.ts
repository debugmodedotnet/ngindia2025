import { IAgenda } from "../models/agenda";

export const agenda: IAgenda[] = [
  {
    title: 'Registration | Breakfast | Goodies Collection',
    speakerName: '',
    speakerPosition: '',
    speakerImage: 'assets/images/agenda/registration.png',
    startTime: '9:00 AM',
    endTime: '10:00 AM',
    description: '',
  },
  {
    title: 'Welcome and Speaker Felicitation',
    speakerName: '',
    speakerPosition: '',
    speakerImage: 'assets/images/agenda/award.png',
    startTime: '10:00 AM',
    endTime: '10:30 AM',
    description: '',
  },
  // {
  //   title: 'Break',
  //   speakerName: '',
  //   speakerPosition: '',
  //   speakerImage: 'assets/images/agenda/tea-cup.png',
  //   startTime: '10:20 AM',
  //   endTime: '10:30 AM',
  //   description: '',
  // },
  {
    title: 'Keynote',
    speakerName: 'Michael Hladky',
    speakerPosition: 'CEO @push-based.io',
    speakerImage: 'assets/images/speakers/michael-hladky.jpeg',
    startTime: '10:30 AM',
    endTime: '11:00 AM',
    description:
      'coming soon !',
  },
  {
    title: 'NgRx SignalStore: The Power of Extensibility',
    speakerName: 'Rainer Hahnekamp',
    speakerPosition: 'Trainer and Consultant',
    speakerImage: 'assets/images/speakers/rainer-hahnekamp.jpg',
    startTime: '11:00 AM',
    endTime: '11:30 PM',
    description:
      '<b>NgRx</b> is the undisputed standard for State Management in the Angular ecosystem. With the SignalStore, we have the latest evolution: fully optimized for Signals and officially recommended by the Angular Team. <br/><br/>But for me, the main selling point of the SignalStore is not just that it manages state. It is its Extensibility. <br/><br/> In this talk, I will give a short introduction to the SignalStore before shifting focus to its "crown jewels": Extensions. We will explore what they are, how they work under the hood, and why this modular architecture makes the SignalStore a powerful tool that belongs in every modern Angular application.'
  },
  {
    title: 'Signal Forms: The Future of Forms in Angular',
    speakerName: 'Dhananjay Kumar',
    speakerPosition: 'Founder @NomadCoder| ng-India',
    speakerImage: 'assets/images/speakers/dj.jpeg',
    startTime: '11:30 AM',
    endTime: '12:00 PM',
    description:
      'TBA',
  },
  {
    title: 'Signal Forms meet the Signal Store',
    speakerName: 'Michael Egger-Zikes',
    speakerPosition: 'Trainer and Consultant ',
    speakerImage: 'assets/images/speakers/michaelegger.png',
    startTime: '12:00 PM',
    endTime: '12.30 PM',
    description: 'A global state management layer in the frontend provides numerous benefits and clear boundaries within an Angular application. The framework is currently undergoing a wave of modernization, with the most important change being the introduction of Signal-based APIs. These reactive containers not only improve synchronization for browser rendering but are also ideally suited for managing application state. <br/><br/> The well-known third-party library NgRx Signals introduces the Signal Store, a lightweight state management solution designed around Angular’s Signal APIs. It helps to migrate applications into the modern Angular ecosystem. Its design is highly extensible through custom features and has recently been enhanced with the Event API, which allows Flux-style state management as an opt-in. <br/><br/> Now, the Angular team introduced the Signal Forms API – the third and likely soon most important form state management solution. In addition to being compatible with Angular’s existing two form concepts, Signal Forms offers several exciting new features and integrates seamlessly with Angular Signals. <br/><br/> But how can a modern global state management solution like the NgRx Signal Store work together with Angular’s Signal Forms API? In this session, with the help of live demos, you’ll see how the Signal Store and Signal Forms API can be combined in a modern Angular app. Developers will gain insights into how lightweight, signal-driven state management can be applied both globally and within templates using the Signal Forms API in real-world practice.',
  },
  {
    title: 'Analyze the JS Heap and detect Memory Leaks',
    speakerName: 'Julian Jandl',
    speakerPosition: 'Lead Performance Engineer',
    speakerImage: 'assets/images/speakers/julian.jpeg',
    startTime: '12:30 PM',
    endTime: '1:00 PM',
    description:
      '<b>Memory leaks </b> or high memory consumption are the number one reason for crashing browser sessions. However, analyzing the memory consumption of javascript applications and identifying memory leaks are one of the most difficult tasks to perform, even as a dedicated performance engineer. It requires a deep understanding of the language, specific tooling and most of the time of the underlying application and its various states as well. <br/><br/> With this talk I want to invite you to a deep dive into the memory analysis of javascript applications. I will point out the theoretical concepts of javascripts memory consumption, the garbage collection process, the memory heap and memory leak identification.<br/><br/> Based on comprehensive demo applications I will walk you through a methodical approach on how to identify and fix memory leaks while showcasing the latest available developer tools.',
  },
  {
    title: 'Lunch Break',
    speakerName: '',
    speakerPosition: '',
    speakerImage: 'assets/images/agenda/lunch-break.png',
    startTime: '1:00 PM',
    endTime: '2:00 PM',
    description: '',
  },
  {
    title:
      'Scaling Without Chaos: Building Enterprise Microfrontends',
    speakerName: 'Pankaj Parkar',
    speakerPosition: 'Senior Software Engineer',
    speakerImage: 'assets/images/speakers/pankaj-parkar.jpeg',
    startTime: '2:00 PM',
    endTime: '2:30 PM',
    description:
      'As enterprise applications grow, the "Majestic Monolith" often becomes a bottleneck for team autonomy and deployment speed. Microfrontends offer a solution, but implementation can be a minefield of version conflicts and complex configurations. <br/><br/> In this session, we’ll explore the modern Microfrontend landscape using the latest Angular features. We will dive into Native Federation. You will learn how to leverage Signals for cross-app state management, master dynamic routing, and ensure a seamless user experience across independent bundles. Join us to learn the blueprint for scalable, high-performance Angular orchestration.',
  },
  {
    title: 'The Architecture Behind Nx Speed',
    speakerName: 'Jaroslaw Zolnowski',
    speakerPosition: 'Team Lead',
    speakerImage: 'assets/images/speakers/jaroslow.jpg',
    startTime: '2:30 PM',
    endTime: '3:00 PM',
    description:
      '<b> Nx </b> is known for its speed—but why is it actually so fast? In this talk, we’ll dive into Nx’s architecture to reveal what happens behind the scenes during a build. You’ll learn how Nx leverages a graph-based representation of your workspace, how smart caching eliminates redundant work, and how incremental builds dramatically improve performance. <br/><br/>Through source code walkthroughs and live demos, we’ll explore how Nx converts project dependencies into execution graphs, handles caching efficiently, and uses buildable libraries to optimize large monorepos. Whether you’re new to Nx or using it daily, this session will help you better understand and trust what Nx is doing for you.',
  },
  {
    title: 'Angular SSR: Rendering, Hydration, and the Hidden Tradeoffs',
    speakerName: 'Aprajita Verma',
    speakerPosition: 'Frontend Architect',
    speakerImage: 'assets/images/speakers/aprajita.png',
    startTime: '3:00 PM',
    endTime: '3:30 PM',
    description:
      'Angular Server Side Rendering changes how applications execute by adding a server runtime, double execution, and hydration. This talk explains how Angular SSR actually works and takes a devil’s-advocate view of its benefits and pitfalls, covering hydration costs, duplicated logic, platform leaks, and Signals interaction <br/><br/> The goal is to help teams decide when Angular SSR is worth the complexity and when it is not.'
  },
  {
    title: 'Debugging Angular SSR: Tales of Pending Task, Hydration, Race Conditions',
    speakerName: 'Michael Hladky',
    speakerPosition: 'CEO @push-based.io',
    speakerImage: 'assets/images/speakers/michael-hladky.jpeg',
    coSpeaker: {
      name: 'Julian Jandl',
      position: 'Lead Performance Engineer',
      image: 'assets/images/speakers/julian.jpeg',
    },
    startTime: '3:30 PM',
    endTime: '4:00 PM',
    description:
      'Angular SSR promises to improve your application Core Web Vitals and SEO, but it also introduces a layer of complexity. This session gives attendees the key concepts and practical techniques needed to migrate an Angular app to server-side rendering with confidence. <br/><br/> We will explore how Angular SSR works under the hood, with a focused deep dive into execution context differences between server and browser, the realities of running in two runtimes, and what "stability" means during SSR. You\'ll learn how pending tasks—timers, intervals, unresolved async work, and subscriptions—can silently keep renders open and how to diagnose and prevent that. We\'ll also cover hydration debugging: spotting mismatches, avoiding duplicated side effects, and fixing issues like flicker or full client re-renders that undo SSR\'s benefits.',
  },
  {
    title: 'Tea Break',
    speakerName: '',
    speakerPosition: '',
    speakerImage: 'assets/images/agenda/tea-cup.png',
    startTime: '4:00 PM',
    endTime: '4:30 PM',
    description: '',
  },
  {
    title: 'Leveraging the Resource API: caching, SWR, prefetching and optimistic updates',
    speakerName: 'Élise Patrikainen',
    speakerPosition: 'FrontEnd Architect',
    speakerImage: 'assets/images/speakers/elise.jpeg',
    startTime: '4:30 PM',
    endTime: '5:00 PM',
    description:
      'The Resource API offers an efficient solution for handling asynchronous data in Angular applications. Nevertheless, what if we need to manage this data in a more refined way, namely by caching it? Would it be possible to extend the Resource API accordingly? <br/><br/> In this talk, we will show how surprisingly simple it is to build a state management layer on top of the Resource API. Starting with a basic caching implementation, we will progressively add more advanced features such as stale-while-revalidate logic (SWR), prefetching, and optimistic updates. <br/><br/> Beyond demonstrating the extensibility of the Resource API, this talk explores the option of an asynchronous state management option based on Angular signals.',
  },
  {
    title: 'Beyond ARIA: Accessibility as an Engineering Practice',
    speakerName: 'Aditi Joshi',
    speakerPosition: 'Senior Software Developer',
    speakerImage: 'assets/images/speakers/aditi.jpg',
    startTime: '5:00 PM',
    endTime: '5:30 PM',
    description:
      'Accessibility issues in Angular applications rarely come from a single missing attribute or role. They are often the result of system level decisions such as component design, routing behavior, focus management, performance considerations, and development workflows. <br/> <br/>This session looks at accessibility as an engineering practice rather than a UI task. Using real world Angular examples, we explore common patterns that unintentionally break keyboard navigation and screen reader support, and how to address them using Angular CDK, accessible component design, and simple dev time checks.'
  },
  {
    title: 'Angular Accessibility Testing Pyramid ',
    speakerName: 'Adrian Romanski',
    speakerPosition: 'Software Engineer',
    speakerImage: 'assets/images/speakers/adrian.jpeg',
    startTime: '5:30 PM',
    endTime: '6:00 PM',
    description:
      'Using a real-world example of a comic book store, we will implement a new feature step by step, showing how accessibility can be built into the development workflow from the very beginning. The talk demonstrates how to introduce accessibility testing and inclusive coding practices into an organization in a simple, practical, and repeatable way. <br/><br/ You’ll see how different layers of the accessibility testing pyramid work together – from fast unit tests catching WCAG violations, screen-reader integration tests, all the way to end-to-end accessibility checks in Storybook. <br/><br/> We’ll use Vitest, Angular Component Harness, Guidepup, and Storybook Play Functions to show how each tool fits into the workflow and helps prevent accessibility regressions and future legal or compliance risks. <br/><br/> Finally, you’ll learn how Nx generators can scaffold accessible components, harnesses, stories, and tests, making accessibility an automatic part of the development process, not an afterthought.',
  },
];