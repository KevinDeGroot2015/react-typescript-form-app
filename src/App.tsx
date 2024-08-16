import { useState } from "react";
import CourseGoalList from "./Coursegoallist";
import NewGoal from "./NewGoal";

export interface MainGoalsInterface {
    title: string;
    description: string;
    id: number;
}

function App() {
    const [goals, setGoals] = useState<MainGoalsInterface[]>([]);

    function addGoalhandler(goaltitle: string, goalDescr: string) {
        setGoals((oldGoal) => {
            const newGoal: MainGoalsInterface = {
                title: goaltitle,
                description: goalDescr,
                id: Math.random(),
            };
            return [...oldGoal, newGoal];
        });
    }

    function deleteGoalHandler(id: number) {
        setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
    }

    return (
        <main>
            <h1>Add your goals!</h1>

            <NewGoal addGoalFunc={addGoalhandler} />

            <CourseGoalList deleteAction={deleteGoalHandler} goals={goals} />
        </main>
    );
}

export default App;
