import Image from "next/image";

type Props = {};

const ForecastItem = (props: Props) => {
  return (
    <div>
      <Image src="/storm.svg" alt="storm icon" width={100} height={100} />
      <p>Temperature</p>
      <p>Condition</p>
    </div>
  );
};

export default ForecastItem;
