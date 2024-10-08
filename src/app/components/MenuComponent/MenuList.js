import Image from "next/image";
import React from "react";

const MenuList = () => {
  return (
    <>
      <div className="bg-slate-200 py-20">
        <div className="w-full px-5">
          <div className="w-[80%] flex flex-col justify-center mx-auto">
            <div className="text-end border-b-2 border-slate-400">
              <h1 className="text-[40px] font-semibold text-slate-700 ">
                DAY TO NIGHT
              </h1>
              <p>SERVED DAILY 10AM - 2AM</p>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-start border-b-2 border-slate-300 2xl:pt-3 xl:pt-3 lg:pt-6 md:pt-9 sm:pt-9 pt-9 pb-3">
                <Image
                  src="/images/menu_sticker.png"
                  width={100}
                  height={100}
                  className="pe-5 me-2" alt=""
                />
                <div className="flex flex-col items-start">
                  <h1 className="text-[30px] text-slate-600">Starters</h1>
                  <p className="text-[12px] text-slate-600">
                    This is a section of your menu. Give your section a brief
                    description
                  </p>
                </div>
              </div>
              <ul className="list-none pb-16 ">
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>3 Tomatoes Salad</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>200</span>
                      <Image
                        src="/images/menu_sticker4.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Multi-Greens Salad</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>350</span>
                      <Image
                        src="/images/menu_sticker.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Pani Puri (6 pieces)</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>50</span>
                      <Image
                        src="/images/menu_sticker4.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>French Fries</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>200</span>
                      <Image
                        src="/images/menu_sticker5.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Malai Chaap</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>350</span>
                      <Image
                        src="/images/menu_sticker4.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
              </ul>

              <div className="flex justify-start border-b-2 border-slate-300 py-3">
                <Image
                  src="/images/menu_sticker2.png"
                  width={100}
                  height={100}
                  className="pe-5 me-2" alt=""
                />
                <div className="flex flex-col items-start">
                  <h1 className="text-[30px] text-slate-600">Main Courses</h1>
                  <p className="text-[12px] text-slate-600">
                    This is a section of your menu. Give your section a brief
                    description
                  </p>
                </div>
              </div>
              <ul className="list-none pb-16">
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Paneer Butter Masala</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>290</span>
                      <Image
                        src="/images/menu_sticker4.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Kadhai Paneer</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>300</span>
                      <Image
                        src="/images/menu_sticker2.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Matar mashroom</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>270</span>
                      <Image
                        src="/images/menu_sticker.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Paneer-do-pyaaza</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>320</span>
                      <Image
                        src="/images/menu_sticker5.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Malai Kofta</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>380</span>
                      <Image
                        src="/images/menu_sticker2.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Achari paneer</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>290</span>
                      <Image
                        src="/images/menu_sticker6.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
              </ul>

              <div className="flex justify-start border-b-2 border-slate-300 py-3">
                <Image
                  src="/images/menu_sticker3.png"
                  width={100}
                  height={100}
                  className="pe-5 me-2" alt=""
                />
                <div className="flex flex-col items-start">
                  <h1 className="text-[30px] text-slate-600">Desserts</h1>
                  <p className="text-[12px] text-slate-600">
                    This is a section of your menu. Give your section a brief
                    description
                  </p>
                </div>
              </div>
              <ul className="list-none pb-15">
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Jalebi (500gm)</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>290</span>
                      <Image
                        src="/images/menu_sticker6.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Kaju Katli (250gm)</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>400</span>
                      <Image
                        src="/images/menu_sticker3.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Kalakand (500gm)</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>290</span>
                      <Image
                        src="/images/menu_sticker6.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Gulab Jamun (2 pieces)</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>290</span>
                      <Image
                        src="/images/menu_sticker4.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Rasmalai (2 pieces)</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>160</span>
                      <Image
                        src="/images/menu_sticker3.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="border-b-2 border-slate-300 py-4">
                  <div className="w-full grid grid-cols-4">
                    <div className="col-span-3 flex flex-col">
                      <h1>Moongdal Halwa</h1>
                      <p className="text-[12px] text-slate-600">
                        This is an item on your menu. Give your item a brief
                        description
                      </p>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span>290</span>
                      <Image
                        src="/images/menu_sticker6.png"
                        width={100}
                        height={100}
                        className="pe-5 me-2" alt=""
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuList;
