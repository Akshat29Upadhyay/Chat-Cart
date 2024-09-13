"use client";
import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react";

export default function Sample() {
  const tasks = useQuery(api.sample.get);  
  return (
    <div className="justify-center items-center">
        <p>Tasks</p>
        {tasks?.map((task, idx ) => <p key={idx}>{JSON.stringify(task)}</p>)}
    </div>
  );
}