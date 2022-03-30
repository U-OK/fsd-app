import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Result, Button } from "antd";
import {useParams} from 'react-router-dom';
import { reflect } from "@effector/reflect";
import { ToggleTask } from "features/toggleTask";
import { TaskCard, taskModel } from "entities/task";
import styles from "./styles.module.scss";

type Props = {
    isLoading: boolean;
};

type Params = {
    taskId: string;
}

const View = ({ isLoading }: Props) => {
    const { taskId } = useParams<Params>();
    const task = taskModel.selectors.useTask(Number(taskId));

    useEffect(() => {
        taskId && taskModel.effects.getTaskByIdFx({ taskId });
    }, [taskId]);

    // Можно часть логики перенести в entity/task/card (как контейнер)
    if (!task && !isLoading) {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Task was not found"
                extra={<Link to="/"><Button type="primary">Back to tasks list {taskId}</Button></Link>}
            />
        )
    }

    return (
        <Layout className={styles.root}>
            <Layout.Content className={styles.content}>
                <TaskCard
                    data={task}
                    size="default"
                    loading={isLoading}
                    className={styles.card}
                    bodyStyle={{ height: 400 }}
                    extra={<Link to="/">Back to TasksList</Link>}
                    actions={[
                        <ToggleTask key="toggle" taskId={Number(taskId)} />
                    ]}
                />
            </Layout.Content>
        </Layout>
    )
};

const TaskDetailsPage = reflect({
    view: View,
    bind: {
        isLoading: taskModel.$taskDetailsLoading,
    }
});

export default TaskDetailsPage;
