import './App.css';
import {useState} from "react";
import Accordion from "./components/accordion/Accordion";

const App = () => {
  const [questions, setQuestions] = useState([
      {
          id: "784dfsd4fd8f7d",
          title: "What is Netflix?",
          content: `<div>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of 
internet-connected devices.</div><br />You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something 
new to discover and new TV shows and movies are added every week!</div>`
      },
      {
          id: "784dfsdwwd8f7d",
          title: "How much does Netflix cost?",
          content: `<div>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month. 
No extra costs, no contracts.</div>`
      },
      {
          id: "7f4ddsd4wd8f7d",
          title: "Where can I watch?",
          content: `<div>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected 
device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</div><br /><div>You can also download your favorite shows with 
the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</div>`
      },
      {
          id: "784dfsdtou8f7d",
          title: "How do I cancel?",
          content: `<div>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – 
start or stop your account anytime.</div>`
      },
      {
          id: "784dfsd4fd8opl",
          title: "What can I watch on Netflix?",
          content: `<div>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, 
anytime you want.</div>`
      },
      {
          id: "784jfgh4fd8f7d",
          title: "Is Netflix good for kids?",
          content: `<div>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</div>
<br /><div>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</div>`
      },
      {
          id: "8845fsd3fd8f7d",
          title: "Why am I seeing this language?",
          content: `<div>Your browser preferences determine the language shown here.</div>`
      }
  ]);

  return (
    <div className="app">
        <Accordion questions={questions} />
    </div>
  );
}

export default App;
