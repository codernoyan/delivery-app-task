import { useState } from "react";
import Card from "../../ui/Card";
import Modal from "../../ui/Modal";

const glassesData = [
  {
    id: 1,
    productName: "BlueShield Ultra",
    description: "BlueShield Ultra glasses are designed to protect your eyes from harmful blue light emitted by digital screens. They feature a stylish frame with premium anti-blue light lenses, providing clear vision and reducing eye strain. Perfect for anyone who spends long hours in front of screens.",
    price: 49.99,
    availableColors: ["Black", "Tortoise Shell", "Clear"],
    image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/ms/media/catalog_product/1/44-p3640_f.jpg/w=400,h=200,fit=fill,bg=fff"
  },
  {
    id: 2,
    productName: "SightGuard Pro",
    description: "SightGuard Pro glasses combine fashion with function. These sleek and lightweight glasses feature advanced blue light blocking technology to shield your eyes from digital eye strain, headaches, and fatigue. The durable frame ensures long-lasting comfort and style.",
    price: 39.99,
    availableColors: ["Gunmetal", "Rose Gold", "Navy Blue"],
    image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/ms/media/catalog_product/1/10033_f_2_1.jpg/w=400,h=200,fit=fill,bg=fff"
  },
  {
    id: 3,
    productName: "VisionShield Elite",
    description: "The VisionShield Elite glasses are a premium choice for ultimate eye protection. Engineered with advanced anti-blue light lenses, they effectively filter out harmful blue light and reduce glare. The modern design and adjustable nose pads ensure a comfortable fit for all-day wear.",
    price: 69.99,
    availableColors: ["Matte Black", "Crystal Clear", "Amber Tortoise"],
    image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/ms/media/catalog_product/1/5496_f.jpg/w=400,h=200,fit=fill,bg=fff"
  },
  {
    id: 4,
    productName: "KidsGuard Jr.",
    description: "KidsGuard Jr. glasses are specially designed for children. These fun and vibrant glasses not only protect young eyes from blue light but also offer durability and flexibility for active kids. Help your child maintain healthy vision during screen time with KidsGuard Jr.",
    price: 24.99,
    availableColors: ["Blueberry Burst", "Pink Lemonade", "Lime Zest"],
    image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/ms/media/catalog_product/1/31-p1996_f.jpg/w=400,h=200,fit=fill,bg=fff"
  },
  {
    id: 5,
    productName: "RetroShield Classic",
    description: "Embrace a vintage-inspired look with RetroShield Classic glasses. These timeless frames feature premium anti-blue light lenses that block harmful blue light, while the retro design adds a touch of style to your everyday wear. Protect your eyes with a touch of nostalgia.",
    price: 34.99,
    availableColors: ["Tortoise Shell", "Matte Black", "Clear Crystal"],
    image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/ms/media/catalog_product/1/31-p10942_f.jpg/w=400,h=200,fit=fill,bg=fff"
  },
  {
    id: 6,
    productName: "ProGlow Max",
    description: "Introducing ProGlow Max glasses, the ultimate solution to combat digital eye strain and sleep disruption caused by blue light. With advanced lens technology and a lightweight frame, these glasses offer optimal eye protection and visual clarity during extended screen use.",
    price: 59.99,
    availableColors: ["Silver", "Rose Gold", "Midnight Blue"],
    image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/ms/media/catalog_product/1/35-p11264_f.jpg/w=400,h=200,fit=fill,bg=fff"
  },
  {
    id: 7,
    productName: "ClearVue HD",
    description: "ClearVue HD glasses offer crystal-clear vision and effective blue light protection. These glasses are designed with high-definition lenses that filter out harmful blue light while maintaining color accuracy and visual clarity. Enjoy enhanced visual experience with ClearVue HD.",
    price: 59.99,
    availableColors: ["Transparent", "Crystal Blue", "Smokey Grey"],
    image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/ms/media/catalog_product/1/31-m1948_f.jpg/w=400,h=200,fit=fill,bg=fff"
  },
  {
    id: 8,
    productName: "ActiveShield Sport",
    description: "ActiveShield Sport glasses are specifically engineered for active individuals. These lightweight and durable glasses feature a wraparound frame design, providing a secure fit during sports and outdoor activities. Enjoy clear vision and reliable blue light protection with ActiveShield Sport.",
    price: 44.99,
    availableColors: ["Black", "Red", "Blue"],
    image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/ms/media/catalog_product/1/31-m11025_f.jpg/w=400,h=200,fit=fill,bg=fff"
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true)
  }

  return (
    <main className="container mx-auto px-2 md:px-0 mt-4">
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          glassesData.map((glass) => <Card openModal={openModal} key={glass.id} glass={glass} />)
        }
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  )
}