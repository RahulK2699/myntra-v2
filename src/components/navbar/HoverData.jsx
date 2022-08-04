import { Menuhover } from "./Menuhover";
import { Transition } from "@headlessui/react";
export default function HoverContent({ isShowing, setIsShowing, menuItems }) {
  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-700"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="absolute top-[72px] left-36  transition duration-150 ease-in-out origin-top flex bg-white shadow-lg"
        onMouseLeave={() => setIsShowing(false)}
      >
        <div className=" flex flex-col">
          <Menuhover categoryName={"Topwear"} items={menuItems.topwear} />
          <Menuhover
            categoryName={"Indian & Festive Wear"}
            items={menuItems["Indian & Festive Wear"]}
          />
        </div>
        <div className=" flex flex-col">
          {" "}
          <Menuhover categoryName={"Bottomwear"} items={menuItems.Bottomwear} />
          <Menuhover
            categoryName={"Innerwear & Sleepwear"}
            items={menuItems["Innerwear & Sleepwear"]}
          />
        </div>
        <div className=" flex flex-col">
          {" "}
          <Menuhover categoryName={"Gadgets"} items={menuItems.Gadgets} />
          <Menuhover
            categoryName={"Sports & Active Wears"}
            items={menuItems["Sports & Active Wears"]}
          />
        </div>
      </div>
    </Transition>
  );
}
