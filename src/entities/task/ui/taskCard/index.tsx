import React from "react";
import type {PropsWithChildren} from "react";
import {Card, CardProps} from "antd"; // ~ "shared/ui/card"
import {Link} from "react-router-dom";
import styles from './styles.module.scss';
import {Task} from "shared/api";

export type TaskCardProps = PropsWithChildren<{
    data?: Task;
    titleHref?: string;
}> & CardProps;

export const TaskCard = ({data, titleHref, children, ...cardProps}: TaskCardProps) => {
    if (!data && !cardProps.loading) return null;

    return (
        <Card
            title={`Task#${cardProps.loading ? "" : data?.id}`}
            className={styles.root}
            {...cardProps}
        >
            {titleHref ? <Link to={titleHref}>{data?.title}</Link> : data?.title}
            {children}
        </Card>
    );
};
