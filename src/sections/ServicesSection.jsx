import ServiceCard from "../components/Services/Service Card/ServiceCard.jsx";

export default function ServicesSection() {
    return (
        <div className={"bg-ls-lightgrey container-px-clamp"}>
            <h1 className={"uppercase"}
                style={{
                    fontSize: "clamp(1.75rem, 1.511rem + 0.9804vw, 2.6875rem)",
                    paddingTop: "clamp(2.5rem, 1.8787rem + 2.549vw, 4.9375rem)",
                    paddingBottom: "clamp(2rem, 1.7132rem + 1.1765vw, 3.125rem)"
                }}>
                Services
            </h1>

            <div className="flex flex-col xl:grid gap-[1.25rem] xl:gap-[1.5rem] xl:grid-cols-2">
                <div className={"flex flex-col gap-[1.25rem] xl:gap-[1.5rem]"}>
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                </div>
                <div className={"flex flex-col gap-[1.25rem] xl:gap-[1.5rem]"}>
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                </div>
            </div>

        </div>
    )
}