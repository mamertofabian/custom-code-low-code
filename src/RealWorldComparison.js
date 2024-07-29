import React, { useState } from "react";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import YouTube from "react-youtube";

const ComparisonItem = ({ title, items, icon, isPositive }) => (
  <div className="mb-4">
    <h4 className="font-semibold mb-2">{title}</h4>
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index} className="flex items-start text-sm">
          {isPositive ? (
            <CheckCircle
              className="text-green-500 mr-2 flex-shrink-0"
              size={16}
            />
          ) : (
            <XCircle className="text-red-500 mr-2 flex-shrink-0" size={16} />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ApproachCard = ({
  title,
  description,
  icon,
  pros,
  cons,
  performance,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md h-full">
    <div className="flex items-center mb-4">
      <i className="text-4xl mr-2">{icon}</i>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="mb-4 text-sm">{description}</p>
    <ComparisonItem title="Advantages" items={pros} isPositive={true} />
    <ComparisonItem title="Limitations" items={cons} isPositive={false} />
    <div className="mt-4">
      <h4 className="font-semibold mb-2">
        Suitability for Complex Reporting Dashboards:
      </h4>
      <p className="text-lg font-bold text-blue-600">
        {performance}% effectiveness
      </p>
    </div>
  </div>
);

const Timeline = ({ events }) => (
  <div className="relative mt-8 pl-8 border-l-2 border-gray-200">
    {events.map((event, index) => (
      <div key={index} className="mb-8 relative">
        <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-blue-500"></div>
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <p className="text-sm text-gray-600">{event.description}</p>
      </div>
    ))}
  </div>
);

const RealWorldComparison = () => {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const timelineEvents = [
    {
      title: "Month 0",
      description: "Decision to migrate to a low-code platform dashboard",
    },
    {
      title: "Month 1",
      description: "Expected completion of migration (not achieved)",
    },
    {
      title: "Month 7",
      description:
        "Basic functionality still not implemented in low-code version",
    },
    {
      title: "Present",
      description:
        "Original custom-coded dashboard still in use, connecting to new database",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-gray-100">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
        Comparison: Old Dashboard vs New Dashboard for Complex Reporting
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-6 mb-8">
        <div className="flex-1 mb-6 md:mb-0">
          <ApproachCard
            title="Old Dashboard (Custom Coding)"
            description="Tailored development using modern frameworks and libraries."
            icon="👨‍💻"
            pros={[
              "Full control over UI and functionality",
              "Highly customizable to meet specific requirements",
              "Scalable for complex, data-intensive applications",
              "Leverages powerful libraries for advanced features",
            ]}
            cons={[
              "Requires skilled developers",
              "May have longer initial development time",
              "Ongoing maintenance needed",
            ]}
            performance={95}
          />
        </div>
        <div className="flex-1">
          <ApproachCard
            title="New Dashboard (Low-Code Platform)"
            description="Visual development using pre-built components with some customization."
            icon="🧩"
            pros={[
              "Rapid initial prototyping",
              "Accessible to non-developers",
              "Quick setup for standard features",
            ]}
            cons={[
              "Limited flexibility for complex UI/UX requirements",
              "Potential performance issues with data-intensive applications",
              "Difficulty in implementing highly specific or advanced features",
              "Possible limitations in scalability for complex projects",
            ]}
            performance={30}
          />
        </div>
      </div>

      <div className="bg-blue-100 p-4 rounded-lg relative">
        <h3 className="text-lg font-semibold mb-2">
          Key Considerations for Complex Reporting Dashboards
        </h3>
        <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
          <li>
            Custom coding excels in projects requiring high customization and
            complex functionality.
          </li>
          <li>
            Low-code tools may struggle with sophisticated reporting dashboards
            and custom UI elements.
          </li>
          <li>
            For data-intensive applications, custom coding often offers better
            performance and scalability.
          </li>
          <li>
            The choice between custom and low-code depends on specific project
            requirements and long-term goals.
          </li>
        </ul>
        <button
          className="mt-4 text-blue-600 hover:text-blue-800 flex items-center"
          onClick={() => setShowCaseStudy(!showCaseStudy)}
        >
          {showCaseStudy ? "Hide Case Study" : "Show Case Study"}
          <ArrowRight size={16} className="ml-1" />
        </button>
      </div>

      {showCaseStudy && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">
            Real-World Case Study: Dashboard Migration Attempt
          </h3>
          <p className="text-sm mb-4">
            This case study examines an attempt to migrate from a custom-coded
            dashboard to a low-code platform solution for a complex reporting
            system.
          </p>
          <Timeline events={timelineEvents} />
          <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
            <p className="text-sm">
              <strong>Key Takeaway:</strong> In this specific case, the
              migration to a low-code platform took significantly longer than
              anticipated and struggled to replicate the functionality of the
              custom-coded solution. This highlights the potential challenges in
              using low-code platforms for complex, highly customized reporting
              dashboards.
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">
          Learn More: Custom Coding vs No-code Solutions
        </h3>
        <p className="mb-4 text-sm">
          The video discusses the pitfalls of no-code app development platforms, focusing on the speaker's personal experience with FlutterFlow. The main argument is that these platforms are a "trap" because:
        </p>
        <ul className="list-disc pl-5 mb-4 text-sm">
          <li>They often can't handle complex or unique features, limiting customization.</li>
          <li>The generated code is often messy and difficult to work with.</li>
          <li>They market themselves as full-stack solutions but fall short for production-grade applications.</li>
        </ul>
        <h4 className="font-semibold mb-2">Key points:</h4>
        <ul className="list-disc pl-5 mb-4 text-sm">
          <li>No-code platforms like FlutterFlow and Bubble work well for simple apps or MVPs.</li>
          <li>They struggle with the last 10-20% of development, especially for unique features.</li>
          <li>Downloading and working with the generated code can be challenging.</li>
          <li>Many developers recommend building apps "the old-fashioned way" for better results.</li>
          <li>No-code platforms can be useful for quick prototypes but may not be suitable for full-scale, production-ready applications.</li>
        </ul>
        <div className="aspect-w-16 aspect-h-9">
          <YouTube
            videoId="xkMuykgicYA"
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 0,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RealWorldComparison;
