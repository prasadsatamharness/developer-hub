import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { tag } from "../data/roadmapData";

const HorizonCard = ({ title, description, tag, module }) => {
  const colorMap = new Map([
    [
      "red",
      {
        color: "var(--red-200)",
        textColor: "var(--red-800)",
      },
    ],
    [
      "blue",
      {
        color: "var(--primary-2)",
        textColor: "var(--primary-8)",
      },
    ],
    [
      "yellow",
      {
        color: "var(--yellow-200)",
        textColor: "var(--yellow-800)",
      },
    ],
    [
      "green",
      {
        color: "var(--green-200)",
        textColor: "var(--green-800)",
      },
    ],
    [
      "gray",
      {
        color: "var(--gray-200)",
        textColor: "var(--gray-800)",
      },
    ],
  ]);

  return (
    <div className={clsx(styles.card, styles[module])}>
      <div className={styles.tag}>
        {tag.length > 0 &&
          tag.map((tagItem: tag) => {
            const colorSet = colorMap.get(tagItem.color);

            //if  colorSet doesnot exists then it means the colors are hex code custom color and not predefined colors
            const textColor = colorSet ? colorSet.textColor : tagItem.textColor;
            const backgroundColor = colorSet ? colorSet.color : tagItem.color;

            return (
              <p
                style={{
                  color: textColor,
                  backgroundColor: backgroundColor,
                }}
              >
                {tagItem.value}
              </p>
            );
          })}
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default HorizonCard;
