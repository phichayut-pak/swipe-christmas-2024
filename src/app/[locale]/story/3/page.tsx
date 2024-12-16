"use client";
import NavBar from "@/components/Navbar";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import IgContact from "@/components/IgContact";
import { useAppDispatch } from "@/store/hook";
import { setUser } from "@/store/quiz";
import { useRouter } from "@/navigation";

const Story3 = () => {
  const locale = useLocale();
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [mail, setMail] = useState("");
  const [ig, setIg] = useState("");
  const [knowSwipeBefore, setKnowSwipeBefore] = useState(false);
  const [acceptConditions, setAcceptConditions] = useState(false);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const checkSwipeBox = (know: boolean) => {
    if (knowSwipeBefore && !know) {
      setKnowSwipeBefore(false);
    } else if (!knowSwipeBefore && know) {
      setKnowSwipeBefore(true);
    }
  };

  const onSubmitForm = () => {
    dispatch(
      setUser({
        name: nickname,
        age: age,
        gender: gender,
        ig: ig,
        mail: mail,
      })
    );

    // setTimeout(() => {
    //   router.push("/story/penguin");
    // }, 3000);
    router.push("/story/penguin");
  };

  return (
    <div
      className="relative w-full min-h-[100dvh] p-10 bg-center bg-no-repeat overflow-x-hidden"
      style={{
        backgroundImage: "url('/STORY 3/BACKGROUND.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute w-full top-0 left-0 p-10 z-10">
        <NavBar locale={locale}></NavBar>
      </div>

      <div className="absolute inset-0">
        <div className="relative w-full flex justify-center items-center flex-col">
          <div className="relative w-full" style={{ aspectRatio: "1" }}>
            <Image
              alt="globe"
              src="/STORY 3/GLOBE.png"
              width={1500}
              height={1500}
              className="absolute -left-16 min-w-[140%]"
            />
          </div>

          <div className="relative mt-10 w-full flex flex-col justify-center items-center bg-transparent">
            <Image
              alt="tag"
              src="/STORY 3/TAG.png"
              width={350}
              height={350}
              className="absolute -top-14 z-0"
            />

            <div className="pb-20 font-bold gap-1 mt-16 z-10 flex flex-col justify-start items-start px-10 w-[350px]">
              <div className="inline-flex justify-center items-end text-black ">
                Nickname <span className="text-red-500">*</span>:
                <input
                  required
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="outline-none border-b-2 border-black bg-transparent max-w-40 ml-1 pl-2 rounded-none"
                />
              </div>

              <div className="inline-flex justify-center items-end text-black ">
                Age<span className="text-red-500">*</span>:
                <input
                  required
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="outline-none border-b-2 border-black bg-transparent max-w-40 ml-1 pl-2 rounded-none"
                />
              </div>

              <div className="inline-flex justify-center items-end text-black mt-2">
                Gender<span className="text-red-500">*</span>:
                <select
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="outline-none border-2 rounded-lg border-black bg-transparent max-w-40 px-2 ml-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">LGBTQ</option>
                  <option value="unknown">Prefer not to say</option>
                </select>
              </div>

              <div className="inline-flex justify-center items-end text-black ">
                Mail<span className="text-red-500">*</span>:
                <input
                  required
                  type="text"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  className="outline-none border-b-2 border-black bg-transparent max-w-48 ml-1 pl-2 rounded-none"
                />
              </div>

              <div className="gap-1 inline-flex justify-center items-end text-black ">
                IG:
                <input
                  type="text"
                  value={ig}
                  onChange={(e) => setIg(e.target.value)}
                  className="outline-none border-b-2 border-black bg-transparent max-w-40 pl-2 rounded-none"
                />
              </div>

              <div className="mt-3 w-full flex flex-col justify-center items-center">
                Do you know Swipe Before?
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={knowSwipeBefore}
                      onChange={() => checkSwipeBox(true)}
                      className="h-5 w-5 border-2 border-black rounded-md mr-2 bg-transparent appearance-none checked:bg-green-500"
                    />
                    yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={!knowSwipeBefore}
                      onChange={() => checkSwipeBox(false)}
                      className="h-5 w-5 border-2 border-black rounded-md mr-2 bg-transparent appearance-none checked:bg-green-500"
                    />
                    no
                  </label>
                </div>
              </div>
            </div>

            <div className="h-6 mt-7 flex flex-col justify-center items-center gap-y-3">
              <button
                disabled={
                  nickname === "" ||
                  age === "" ||
                  mail === "" ||
                  !acceptConditions
                }
                onClick={onSubmitForm}
                className="text-white py-2.5 shadow-lg rounded-lg text-center font-bold w-full mx-24 transition-all duration-50 ease-in-out disabled:opacity-50 bg-gradient-to-r from-[#FAA98F] to-[#FD67AD]"
              >
                Done!
              </button>

              <label className="flex items-center font-bold gap-1">
                <input
                  type="checkbox"
                  checked={acceptConditions}
                  onChange={() => setAcceptConditions(!acceptConditions)}
                  className="h-5 w-5 border-2 border-black rounded-md mr-2 bg-transparent appearance-none checked:bg-gradient-to-r checked:from-[#FAA98F] checked:to-[#FD67AD]"
                />
                accept terms & conditions
              </label>

              <IgContact></IgContact>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story3;
