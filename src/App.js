import './App.css';
import {useState} from "react";
import Accordion from "./components/accordion/Accordion";

const App = () => {
  const [questions, setQuestions] = useState([
      {
          id: "784dfsd4fd8f7d",
          title: "What is Netflix?",
          content: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
      },
      {
          id: "784dfsdwwd8f7d",
          title: "How much does Netflix cost?",
          content: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month. No extra costs, no contracts."
      },
      {
          id: "7f4ddsd4wd8f7d",
          title: "Where can I watch?",
          content: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
      },
      {
          id: "784dfsdtou8f7d",
          title: "How do I cancel?",
          content: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
      },
      {
          id: "784dfsd4fd8opl",
          title: "What can I watch on Netflix?",
          content: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
      },
      {
          id: "784jfgh4fd8f7d",
          title: "Is Netflix good for kids?",
          content: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
      },
      {
          id: "8845fsd3fd8f7d",
          title: "Why am I seeing this language?",
          content: "Your browser preferences determine the language shown here."
      }
  ]);

  return (
    <div className="app">
        <Accordion questions={questions} />
    </div>
  );
}

export default App;
