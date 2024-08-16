import { type ReactNode } from "react";

interface CourseGoalProps {
    id: number;
    titel: string;
    children: ReactNode;
    deleteGoal: (id: number) => void;
}

export default function CourseGoal({
    id,
    titel,
    children,
    deleteGoal,
}: CourseGoalProps) {
    return (
        <li>
            <article>
                <h2>{titel}</h2>

                <p>{children}</p>
                <button onClick={() => deleteGoal(id)}>Delete</button>
            </article>
        </li>
    );
}
