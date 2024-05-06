import React from "react";

const Tools = () => {
  return (
    <section className="container">
      <h1 className="text-center  mb-10 font-bold text-lg">Tools</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from({ length: 6 }).map((_, idx) => {
          return (
            <div key={idx}>
              <h1>Tool {idx + 1}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium ipsa maiores.
              </p>
              <h3>Stack used</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tools;
