import { useRef } from "react";

interface NewGoalInterface {
    addGoalFunc: (goaltitle: string, goalDescr: string) => void;
}

export default function NewGoal({ addGoalFunc }: NewGoalInterface) {
    const goalTitleRef = useRef<HTMLInputElement>(null);
    const goalDescrRef = useRef<HTMLInputElement>(null);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (goalTitleRef.current!.value === "") return;
                addGoalFunc(
                    goalTitleRef.current!.value,
                    goalDescrRef.current!.value
                );
                e.currentTarget.reset();
            }}
        >
            <p>
                <label htmlFor="goal">Your goal</label>
                <input ref={goalTitleRef} type="text" id="goal" />
            </p>
            <p>
                <label htmlFor="summary">Your goal summary</label>
                <input ref={goalDescrRef} type="text" id="summary" />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
}
