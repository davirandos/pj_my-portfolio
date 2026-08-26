import { Coffee } from "lucide-react";

const CodeEditor = () => {
  return (
    <div
      className="
        w-full
        min-w-0
        overflow-hidden
        rounded-2xl
        border border-zinc-900
        bg-zinc-900/20
      "
    >
      {/* Header */}
      <div
        className="
          relative
          flex
          h-10
          items-center
          border-b
          border-zinc-900
          px-4
        "
      >
        <div className="flex shrink-0 gap-2">
          <span className="size-3 rounded-full bg-red-400" />
          <span className="size-3 rounded-full bg-yellow-400" />
          <span className="size-3 rounded-full bg-green-400" />
        </div>

        <div
          className="
            absolute
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-1.5
            whitespace-nowrap
            font-mono
            text-[10px]
            text-zinc-400
            sm:text-[11px]
          "
        >
          <Coffee size={12} />

          Davirandos.java
        </div>
      </div>

      {/* Code */}
      <div
        className="
          w-full
          min-w-0
          overflow-x-hidden
          p-3
          sm:p-5
          lg:p-4
        "
      >
        <pre
          className="
            w-full
              whitespace-pre-wrap
              break-words
              font-mono
              text-[10px]
              leading-4
              sm:text-xs
              sm:leading-6
              lg:text-sm
              lg:leading-5
          "
        >
          <code>
            <Line>
              <Keyword>public</Keyword>{" "}
              <Keyword>class</Keyword>{" "}
              <ClassName>Luccas</ClassName> {"{"}
            </Line>

            <Line indent={1}>
              <Keyword>private final</Keyword>{" "}
              <Type>String</Type>{" "}
              <Variable>focus</Variable>{" "}
              <Operator>=</Operator>{" "}
              <StringValue>"Software Development"</StringValue>;
            </Line>

            <Line indent={1}>
              <Keyword>private</Keyword>{" "}
              <Type>String</Type>{" "}
              <Variable>fuel</Variable>{" "}
              <Operator>=</Operator>{" "}
              <StringValue>"Java"</StringValue>;
              <Comment>{" // café ou linguagem? ambos."}</Comment>
            </Line>

            <Line>&nbsp;</Line>

            <Line indent={1}>
              <Keyword>public void</Keyword>{" "}
              <Method>buildCareer</Method>() {"{"}
            </Line>

            <Line indent={2}>
              <Keyword>while</Keyword> (
              <Method>isCurious</Method>()) {"{"}
            </Line>

            <Line indent={3}>
              <Method>learn</Method>();
            </Line>

            <Line indent={3}>
              <Method>build</Method>();
            </Line>

            <Line indent={3}>
              <Method>improve</Method>();
            </Line>

            <Line indent={2}>{"}"}</Line>

            <Line indent={1}>{"}"}</Line>

            <Line>{"}"}</Line>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;

interface LineProps {
  children: React.ReactNode;
  indent?: number;
}

const Line = ({ children, indent = 0 }: LineProps) => (
  <div
    style={{
      paddingLeft: `${indent * 1.25}rem`,
    }}
  >
    {children}
  </div>
);

const Keyword = ({ children }: { children: React.ReactNode }) => (
  <span className="text-violet-600">{children}</span>
);

const Type = ({ children }: { children: React.ReactNode }) => (
  <span className="text-blue-600">{children}</span>
);

const ClassName = ({ children }: { children: React.ReactNode }) => (
  <span className="text-cyan-600">{children}</span>
);

const Variable = ({ children }: { children: React.ReactNode }) => (
  <span className="text-zinc-500">{children}</span>
);

const Method = ({ children }: { children: React.ReactNode }) => (
  <span className="text-blue-500">{children}</span>
);

const Operator = ({ children }: { children: React.ReactNode }) => (
  <span className="text-zinc-500">{children}</span>
);

const StringValue = ({ children }: { children: React.ReactNode }) => (
  <span className="text-emerald-600">{children}</span>
);

const Comment = ({ children }: { children: React.ReactNode }) => (
  <span className="text-zinc-400">{children}</span>
);