export const Heading = ({
  main_heading,
  sub_heading,
}: {
  main_heading: string;
  sub_heading: string;
}) => {
  return (
    <div className="text-center">
      <h2 className="uppercase text-base font-medium text-teal-600 tracking-wider">
        {main_heading}
      </h2>
      <p className="mt-2 capitalize text-3xl leading-8 font-semibold text-white tracking-tight sm:text-4x">
        {sub_heading}
      </p>
    </div>
  );
};
