type Props = {
  service: {
    id: string;
    title: string;
    style: string;
    description: string;
    points: string[];
  };
  index: number;
};

export function ServiceItem({ service, index }: Props) {
  return (
    <div
      className={service.style}
      style={{ top: `calc(20vh + ${index * 10}em)` }}
    >
      <div className="md:grid grid-cols-12 text-(length:--text-heading-2) font-semibold text-(--color-accent-400)">
        <span className="col-span-2">({service.id})</span>

        <h3 className="col-span-8 col-start-6 py-(--space-md)">
          {service.title}
        </h3>
      </div>

      <div className="md:grid grid-cols-12 min-h-[40vh]">
        <div className="col-span-7 col-start-6 flex flex-col gap-y-(--space-sm)">
          <p className="max-w-[40ch] text-(--color-secondary-50)">
            {service.description}
          </p>

          <div className="flex flex-col divide-y divide-(--color-secondary-200)">
            {service.points.map((p, i) => (
              <span
                key={i}
                className="flex gap-x-(--space-sm) py-(--space-3xs)"
              >
                <span className="font-mono text-(--color-secondary-75)">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
