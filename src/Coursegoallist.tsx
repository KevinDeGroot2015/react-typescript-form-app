import CourseGoal from "./CourseGoal";
import { MainGoalsInterface as CGoal } from "./App";

interface CourseGoalListInterface {
    goals: CGoal[];
    deleteAction: (id: number) => void;
}

export default function CourseGoalList({
    deleteAction,
    goals,
}: CourseGoalListInterface) {
    return (
        <ul>
            {goals.map((goal) => {
                return (
                    <CourseGoal
                        id={goal.id}
                        deleteGoal={deleteAction}
                        titel={goal.title}
                        key={goal.id}
                    >
                        {goal.description}
                    </CourseGoal>
                );
            })}
        </ul>
    );
}
