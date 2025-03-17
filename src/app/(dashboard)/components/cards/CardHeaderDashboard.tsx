import { data } from "../../content/ContentFields";


export default function CardHeaderDashboard() {

  const datas = data.map((item) => {
    return (
      <p
        key={item.name}
        className="alinha4 gap-2 hover:scale-125 shadow-md rounded-2xl p-1 bg-fundoProdduto2"
      >
        {item.ico}
        <span className="text-sm">{item.name}</span>
      </p>
    );
  });

  return <>{datas}</>;
}
