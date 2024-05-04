import Link from "next/link";

export const BaseButton = ({
  buttonText,
  buttonHref,
}: {
  buttonText: string;
  buttonHref: string;
}) => {
  console.log(buttonHref);

  return (
    <Link
      href={`/${buttonHref}`}
      className="px-4 py-2 rounded border border-neutral-500 bg-white text-neutral-600 transition duration-100 hover:bg-blue-500 hover:text-white hover:border-blue-500"
    >
      {buttonText}
    </Link>
  );
};
