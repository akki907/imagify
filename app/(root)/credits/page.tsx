import { SignedIn, auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

// import Header from "@/components/shared/Header";
// import { Button } from "@/components/ui/button";
// import { plans } from "@/constants";
// import { getUserById } from "@/lib/actions/user.actions";
// import Checkout from "@/components/shared/Checkout";

const Credits = async () => {
  //   const { userId } = auth();

  //   if (!userId) redirect("/sign-in");

  //   const user = await getUserById(userId);

  return (
    <>
      credit page
      {/* <Header
        title="Buy Credits"
        subtitle="Choose a credit package that suits your needs!"
      />

      <section>
        <ul className="credits-list">
          {plans.map((plan) => (
            <li key={plan.name} className="credits-item">
              <div className="flex-center flex-col gap-3">
                <Image src={plan.icon} alt="check" width={50} height={50} />
                <p className="p-20-semibold mt-2 text-purple-500">
                  {plan.name}
                </p>
                <p className="h1-semibold text-dark-600">${plan.price}</p>
                <p className="p-16-regular">{plan.credits} Credits</p>
              </div>

              {/* Inclusions */}
    </>
  );
};

export default Credits;
