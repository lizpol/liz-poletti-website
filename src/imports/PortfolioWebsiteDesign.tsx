import clsx from "clsx";
import svgPaths from "./svg-7gwb01fi45";

function PBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[111px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[27.75px] left-0 not-italic text-[15px] text-[rgba(0,0,0,0.6)] top-[-0.5px] w-[454px] whitespace-pre-wrap">{children}</p>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[19.5px] left-[48px] top-[151.93px] w-[393.5px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[0px] text-[13px] text-[rgba(0,0,0,0.7)] top-px">{children}</p>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[28.594px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.6px] left-0 not-italic text-[22px] text-[rgba(0,0,0,0.9)] top-[0.5px] tracking-[-0.22px]">{children}</p>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("absolute size-[16px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ArrowRight">{children}</g>
      </svg>
    </div>
  );
}
type LinkBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LinkBackgroundImageAndText({ text, additionalClassNames = "" }: LinkBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[24px] top-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(0,0,0,0.4)] top-[4px] tracking-[0.88px] uppercase">{text}</p>
    </div>
  );
}
type HBackgroundImageAndText1Props = {
  text: string;
};

function HBackgroundImageAndText1({ text }: HBackgroundImageAndText1Props) {
  return <BackgroundImage1>{text}</BackgroundImage1>;
}
type SpanBackgroundImageAndText5Props = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText5({ text, additionalClassNames = "" }: SpanBackgroundImageAndText5Props) {
  return (
    <div className={clsx("h-[27.75px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[27.75px] left-0 not-italic text-[15px] text-[rgba(0,0,0,0.6)] top-[-0.5px]">{text}</p>
      </div>
    </div>
  );
}
type SpanBackgroundImageAndText4Props = {
  text: string;
};

function SpanBackgroundImageAndText4({ text }: SpanBackgroundImageAndText4Props) {
  return (
    <div className="h-[27.75px] relative shrink-0 w-[15px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[27.75px] left-0 not-italic text-[15px] text-[rgba(0,0,0,0.3)] top-[-0.5px]">{text}</p>
      </div>
    </div>
  );
}
type PBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function PBackgroundImageAndText({ text, additionalClassNames = "" }: PBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[25.5px] left-[48px] w-[393.5px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[25.5px] left-0 not-italic text-[15px] text-[rgba(0,0,0,0.6)] top-[-0.5px]">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerBackgroundImageAndText1({ text, additionalClassNames = "" }: ContainerBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute h-[16.5px] left-[48px] w-[393.5px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(0,0,0,0.4)] top-[0.5px] tracking-[0.88px] uppercase">{text}</p>
      <BackgroundImage additionalClassNames="left-[100.79px] top-[0.25px]">
        <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.33333" />
        <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.33333" />
      </BackgroundImage>
    </div>
  );
}
type SpanBackgroundImageAndText3Props = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText3({ text, additionalClassNames = "" }: SpanBackgroundImageAndText3Props) {
  return (
    <div className={clsx("absolute border border-[rgba(0,0,0,0.05)] border-solid h-[30.5px] rounded-[16777200px] top-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[12px] not-italic text-[11px] text-[rgba(0,0,0,0.6)] top-[6.5px] tracking-[0.22px]">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <BackgroundImage2>
      <span className="leading-[19.5px]">{`UX/UI Designer & UX Writer`}</span>
      <span className="font-['Inter:Light',sans-serif] font-light leading-[19.5px] text-[rgba(0,0,0,0.5)]">{text}</span>
    </BackgroundImage2>
  );
}
type HBackgroundImageAndTextProps = {
  text: string;
};

function HBackgroundImageAndText({ text }: HBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[39.43px] left-[48px] top-[96.5px] w-[393.5px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[39.433px] left-0 not-italic text-[34.29px] text-black top-[-0.5px] tracking-[-0.3429px]">{text}</p>
    </div>
  );
}
type SpanBackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText2({ text, additionalClassNames = "" }: SpanBackgroundImageAndText2Props) {
  return (
    <div className={clsx("h-[16.5px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(0,0,0,0.4)] top-[0.5px] tracking-[0.22px]">{text}</p>
      </div>
    </div>
  );
}
type SpanBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText1({ text, additionalClassNames = "" }: SpanBackgroundImageAndText1Props) {
  return (
    <div className={clsx("h-[16.5px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(0,0,0,0.3)] top-[0.5px] tracking-[0.88px] uppercase">{text}</p>
      </div>
    </div>
  );
}
type SpanBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText({ text, additionalClassNames = "" }: SpanBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[15px] top-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[10px] text-[rgba(0,0,0,0.4)] top-[0.5px] tracking-[1.5px] uppercase">{text}</p>
    </div>
  );
}

export default function PortfolioWebsiteDesign() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[1422px] items-start relative size-full" data-name="Portfolio Website Design">
      <div className="content-stretch flex flex-col h-[862px] items-start relative shrink-0 w-full" data-name="Body" style={{ backgroundImage: "linear-gradient(142.978deg, rgb(254, 247, 255) 0%, rgb(240, 249, 255) 25%, rgb(254, 252, 232) 50%, rgb(240, 253, 244) 75%, rgb(254, 242, 242) 100%)" }}>
        <div className="content-stretch flex flex-col h-[3145.859px] items-start relative shrink-0 w-full" data-name="div">
          <div className="bg-white h-[804.023px] relative shrink-0 w-full" data-name="motion.div">
            <div className="absolute h-[452.023px] left-[64px] top-[192px] w-[1015px]" data-name="div">
              <div className="absolute h-[15px] left-0 top-[8px] w-[141.703px]" data-name="Container">
                <div className="absolute bg-[rgba(0,0,0,0.3)] left-0 rounded-[16777200px] size-[4px] top-[5.5px]" data-name="Container" />
                <SpanBackgroundImageAndText text="Product Designer" additionalClassNames="left-[16px] w-[125.703px]" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[16px] h-[253.523px] items-start left-0 top-[56px] w-[1015px]" data-name="motion.h1">
                <div className="h-[81.438px] relative shrink-0 w-full" data-name="span">
                  <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[81.439px] left-0 not-italic text-[85.725px] text-black top-[-0.5px] tracking-[-2.5717px]">I turn complexity</p>
                </div>
                <div className="h-[82.938px] relative shrink-0 w-full" data-name="span">
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#0a0a0a] text-[0px] text-[85.725px] top-[-0.5px] tracking-[-2.5717px]">
                    <span className="leading-[81.439px]">{`into `}</span>
                    <span className="font-['Georgia:Italic',sans-serif] italic leading-[81.439px] text-[rgba(0,0,0,0.7)]">clarity.</span>
                  </p>
                </div>
                <div className="h-[57.148px] relative shrink-0 w-full" data-name="span">
                  <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[57.15px] left-0 not-italic text-[57.15px] text-[rgba(0,0,0,0.35)] top-[-0.5px] tracking-[-1.143px]">No fluff. Just structure.</p>
                </div>
              </div>
              <div className="absolute content-stretch flex gap-[64px] h-[94.5px] items-start left-0 top-[357.52px] w-[1015px]" data-name="motion.div">
                <div className="h-[94.5px] relative shrink-0 w-[672px]" data-name="p">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[31.5px] left-0 not-italic text-[18px] text-[rgba(0,0,0,0.6)] top-[0.5px] w-[659px] whitespace-pre-wrap">I build systems that work under pressure—for real businesses, real constraints, real decisions. Specializing in complex dashboards, multi-step flows, and products where clarity is critical.</p>
                  </div>
                </div>
                <div className="bg-black h-[51.5px] relative rounded-[16777200px] shrink-0 w-[184.367px]" data-name="Link">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[32px] not-italic text-[13px] text-white top-[17px] tracking-[0.26px] uppercase">Get in touch</p>
                    <BackgroundImage additionalClassNames="left-[136.37px] top-[17.75px]">
                      <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </BackgroundImage>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.1)] w-[1143px]" data-name="div" />
          </div>
          <div className="h-[1232.148px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute content-stretch flex flex-col gap-[80px] h-[1232.148px] items-start left-0 pt-[128px] px-[64px] top-0 w-[1143px]" data-name="Container">
              <div className="h-[90.789px] relative shrink-0 w-full" data-name="motion.div">
                <div className="absolute h-[15px] left-0 top-[9.5px] w-[148.43px]" data-name="div">
                  <div className="absolute bg-[rgba(0,0,0,0.2)] h-px left-0 top-[7px] w-[32px]" data-name="Container" />
                  <SpanBackgroundImageAndText text="Selected Work" additionalClassNames="left-[44px] w-[104.43px]" />
                </div>
                <div className="absolute h-[50.289px] left-0 top-[40.5px] w-[1015px]" data-name="h2">
                  <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[50.292px] left-0 not-italic text-[45.72px] text-black top-[-1px] tracking-[-0.9144px]">Projects</p>
                </div>
              </div>
              <div className="h-[805.359px] relative shrink-0 w-full" data-name="motion.div">
                <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[399.43px] left-0 rounded-[24px] top-0 w-[491.5px]" data-name="div">
                  <div className="absolute content-stretch flex h-[16.5px] items-start justify-between left-[48px] top-[48px] w-[393.5px]" data-name="Container">
                    <SpanBackgroundImageAndText1 text="01" additionalClassNames="w-[12.883px]" />
                    <SpanBackgroundImageAndText2 text="2023–24" additionalClassNames="w-[47.492px]" />
                  </div>
                  <HBackgroundImageAndText text="Squadra" />
                  <ContainerBackgroundImageAndText text="atGanz Digital" />
                  <div className="absolute h-[51px] left-[48px] top-[187.43px] w-[393.5px]" data-name="p">
                    <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[25.5px] left-0 not-italic text-[15px] text-[rgba(0,0,0,0.6)] top-[-0.5px] w-[336px] whitespace-pre-wrap">Workforce management platform for shift-based businesses</p>
                  </div>
                  <div className="absolute h-[30.5px] left-[48px] top-[270.43px] w-[393.5px]" data-name="Container">
                    <SpanBackgroundImageAndText3 text="Product Design" additionalClassNames="bg-[rgba(239,246,255,0.3)] left-0 w-[109.797px]" />
                    <SpanBackgroundImageAndText3 text="UX Strategy" additionalClassNames="bg-[rgba(239,246,255,0.3)] left-[117.8px] w-[91.742px]" />
                    <SpanBackgroundImageAndText3 text="System Design" additionalClassNames="bg-[rgba(239,246,255,0.3)] left-[217.54px] w-[107.539px]" />
                  </div>
                  <ContainerBackgroundImageAndText1 text="View project" additionalClassNames="top-[332.93px]" />
                </div>
                <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[399.43px] left-[523.5px] rounded-[24px] top-0 w-[491.5px]" data-name="div">
                  <div className="absolute content-stretch flex h-[16.5px] items-start justify-between left-[48px] top-[48px] w-[393.5px]" data-name="Container">
                    <SpanBackgroundImageAndText1 text="02" additionalClassNames="w-[15.305px]" />
                    <SpanBackgroundImageAndText2 text="2023–24" additionalClassNames="w-[47.492px]" />
                  </div>
                  <HBackgroundImageAndText text="Caveo" />
                  <ContainerBackgroundImageAndText text="atGanz Digital" />
                  <PBackgroundImageAndText text="Digital financial planning structured around life situations" additionalClassNames="top-[187.43px]" />
                  <div className="absolute h-[30.5px] left-[48px] top-[244.93px] w-[393.5px]" data-name="Container">
                    <SpanBackgroundImageAndText3 text="Product Design" additionalClassNames="bg-[rgba(236,253,245,0.3)] left-0 w-[109.797px]" />
                    <SpanBackgroundImageAndText3 text="UX Writing" additionalClassNames="bg-[rgba(236,253,245,0.3)] left-[117.8px] w-[84.695px]" />
                    <SpanBackgroundImageAndText3 text="Trust Building" additionalClassNames="bg-[rgba(236,253,245,0.3)] left-[210.49px] w-[101.5px]" />
                  </div>
                  <ContainerBackgroundImageAndText1 text="View project" additionalClassNames="top-[307.43px]" />
                </div>
                <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[373.93px] left-0 rounded-[24px] top-[431.43px] w-[491.5px]" data-name="div">
                  <div className="absolute content-stretch flex h-[16.5px] items-start justify-between left-[48px] top-[48px] w-[393.5px]" data-name="Container">
                    <SpanBackgroundImageAndText1 text="03" additionalClassNames="w-[15.219px]" />
                    <SpanBackgroundImageAndText2 text="2022–23" additionalClassNames="w-[47.5px]" />
                  </div>
                  <HBackgroundImageAndText text="Nvoye" />
                  <BackgroundImage2>
                    <span className="leading-[19.5px]">Product Designer</span>
                    <span className="font-['Inter:Light',sans-serif] font-light leading-[19.5px] text-[rgba(0,0,0,0.5)]">atNvoye</span>
                  </BackgroundImage2>
                  <PBackgroundImageAndText text="Private digital platform and community for diplomats" additionalClassNames="top-[187.43px]" />
                  <div className="absolute h-[30.5px] left-[48px] top-[244.93px] w-[393.5px]" data-name="Container">
                    <SpanBackgroundImageAndText3 text="Community Design" additionalClassNames="bg-[rgba(250,245,255,0.3)] left-0 w-[129.531px]" />
                    <SpanBackgroundImageAndText3 text="UX Strategy" additionalClassNames="bg-[rgba(250,245,255,0.3)] left-[137.53px] w-[91.742px]" />
                    <div className="absolute bg-[rgba(250,245,255,0.3)] border border-[rgba(0,0,0,0.05)] border-solid h-[30.5px] left-[237.27px] rounded-[16777200px] top-0 w-[123.367px]" data-name="span">
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[12px] not-italic text-[11px] text-[rgba(0,0,0,0.6)] top-[6.5px] tracking-[0.22px]">{`Trust & Discretion`}</p>
                    </div>
                  </div>
                  <ContainerBackgroundImageAndText1 text="View project" additionalClassNames="top-[307.43px]" />
                </div>
                <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[373.93px] left-[523.5px] rounded-[24px] top-[431.43px] w-[491.5px]" data-name="div">
                  <div className="absolute content-stretch flex h-[16.5px] items-start justify-between left-[48px] top-[48px] w-[393.5px]" data-name="Container">
                    <SpanBackgroundImageAndText1 text="04" additionalClassNames="w-[15.477px]" />
                    <SpanBackgroundImageAndText2 text="2023" additionalClassNames="w-[27.836px]" />
                  </div>
                  <HBackgroundImageAndText text="Foster the Family" />
                  <PBackgroundImageAndText text="Website redesign for foster care organization" additionalClassNames="top-[151.93px]" />
                  <div className="absolute h-[30.5px] left-[48px] top-[209.43px] w-[393.5px]" data-name="Container">
                    <SpanBackgroundImageAndText3 text="Web Design" additionalClassNames="bg-[rgba(255,251,235,0.3)] left-0 w-[91.398px]" />
                    <SpanBackgroundImageAndText3 text="Information Architecture" additionalClassNames="bg-[rgba(255,251,235,0.3)] left-[99.4px] w-[159.422px]" />
                  </div>
                  <ContainerBackgroundImageAndText1 text="View project" additionalClassNames="top-[271.93px]" />
                </div>
              </div>
            </div>
            <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.1)] w-[1143px]" data-name="Container" />
          </div>
          <div className="bg-white h-[1109.688px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute h-[1109.688px] left-0 top-0 w-[1143px]" data-name="Container">
              <div className="absolute h-[15px] left-[64px] top-[137.5px] w-[110.672px]" data-name="Container">
                <div className="absolute bg-[rgba(0,0,0,0.2)] h-px left-0 top-[7px] w-[32px]" data-name="Container" />
                <SpanBackgroundImageAndText text="What I Do" additionalClassNames="left-[44px] w-[66.672px]" />
              </div>
              <div className="absolute h-[749.188px] left-[64px] top-[232.5px] w-[1015px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col gap-[24px] h-[334.594px] items-start left-0 top-0 w-[467.5px]" data-name="motion.div">
                  <BackgroundImage1>{`Product & UX Design`}</BackgroundImage1>
                  <div className="h-[111px] relative shrink-0 w-full" data-name="p">
                    <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[27.75px] left-0 not-italic text-[15px] text-[rgba(0,0,0,0.6)] top-[-0.5px] w-[463px] whitespace-pre-wrap">I design end-to-end digital products, from early-stage concept work through to detailed interface design and handoff. My focus is on complex, data-heavy applications where structure and clarity matter more than decoration.</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] h-[147px] items-start relative shrink-0 w-full" data-name="ul">
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="User flows, wireframes, and prototypes" additionalClassNames="w-[274.359px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="Dashboard and workflow design" additionalClassNames="w-[225.516px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="Design systems and component libraries" additionalClassNames="w-[283.469px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="Information architecture and navigation" additionalClassNames="w-[272.102px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[24px] h-[334.594px] items-start left-[547.5px] top-0 w-[467.5px]" data-name="motion.div">
                  <BackgroundImage1>{`UX Writing & Strategy`}</BackgroundImage1>
                  <div className="h-[111px] relative shrink-0 w-full" data-name="p">
                    <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[27.75px] left-0 not-italic text-[15px] text-[rgba(0,0,0,0.6)] top-[-0.5px] w-[458px] whitespace-pre-wrap">I bring precision and clarity to product language, working across English, German, and Italian. I help define product direction, make strategic recommendations, and ensure the interface communicates exactly what users need to know.</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] h-[147px] items-start relative shrink-0 w-full" data-name="ul">
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="Interface copy and microcopy" additionalClassNames="w-[208.156px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="Error states and system messaging" additionalClassNames="w-[244.102px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="Product strategy and recommendations" additionalClassNames="w-[274.719px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="Multilingual product design (EN, DE, IT)" additionalClassNames="w-[273.656px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[24px] h-[334.594px] items-start left-0 top-[414.59px] w-[467.5px]" data-name="motion.div">
                  <HBackgroundImageAndText1 text="UX Research" />
                  <PBackgroundImage>{`My academic research background gives me a strong foundation in UX research methodology. I've adapted rigorous analytical techniques from academic work into practical research skills that inform design decisions.`}</PBackgroundImage>
                  <div className="content-stretch flex flex-col gap-[12px] h-[147px] items-start relative shrink-0 w-full" data-name="ul">
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="User interviews and contextual inquiry" additionalClassNames="w-[266.789px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="Usability testing and evaluation" additionalClassNames="w-[216.18px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="Qualitative analysis and synthesis" additionalClassNames="w-[233.836px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="Competitive and heuristic evaluation" additionalClassNames="w-[252.633px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[24px] h-[334.594px] items-start left-[547.5px] top-[414.59px] w-[467.5px]" data-name="motion.div">
                  <HBackgroundImageAndText1 text="UX for Academia" />
                  <PBackgroundImage>I bring UX and UI design principles to academic contexts, making complex research accessible and compelling. I understand both the academic world and design world, bridging the gap between rigorous content and clear presentation.</PBackgroundImage>
                  <div className="content-stretch flex flex-col gap-[12px] h-[147px] items-start relative shrink-0 w-full" data-name="ul">
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="Grant proposal design and structure" additionalClassNames="w-[250.328px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="Research presentation and visualization" additionalClassNames="w-[276.32px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="Academic website and portfolio design" additionalClassNames="w-[270.531px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[27.75px] items-start relative shrink-0 w-full" data-name="li">
                      <SpanBackgroundImageAndText4 text="—" />
                      <SpanBackgroundImageAndText5 text="Information design for complex research" additionalClassNames="w-[282.055px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.1)] w-[1143px]" data-name="Container" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.7)] h-[97px] relative shrink-0 w-full" data-name="motion.nav">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start pb-px px-[64px] relative size-full">
          <div className="h-[96px] relative shrink-0 w-full" data-name="div">
            <div className="absolute h-[24px] left-[746.38px] top-[36px] w-[268.625px]" data-name="Container">
              <div className="absolute h-[24px] left-0 top-0 w-[37.586px]" data-name="Link">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-black top-[4px] tracking-[0.88px] uppercase">Work</p>
                <div className="absolute bg-black h-px left-0 top-[48px] w-[37.586px]" data-name="motion.div" />
              </div>
              <LinkBackgroundImageAndText text="About" additionalClassNames="left-[101.59px] w-[43.18px]" />
              <LinkBackgroundImageAndText text="Contact" additionalClassNames="left-[208.77px] w-[59.859px]" />
            </div>
            <div className="absolute h-[24px] left-0 top-[36px] w-[63.313px]" data-name="Link">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[13px] text-black top-[2px] tracking-[0.26px]">Liz Poletti</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}