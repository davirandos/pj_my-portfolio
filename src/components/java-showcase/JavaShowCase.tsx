import CodeEditor from "./CodeEditor";

const JavaShowcase = () => {
  return (
    <section
      className="
        relative
        w-full
        min-w-0
        overflow-hidden
        rounded-xl
      "
    >
        <div className="min-w-0">
          <CodeEditor />
        </div>
    </section>
  );
};

export default JavaShowcase;