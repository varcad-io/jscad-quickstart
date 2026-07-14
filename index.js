import * as modeling from "@jscad/modeling";

const { cuboid } = modeling.primitives;
const { translate } = modeling.transforms;

const numberValue = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export function main({ variables = {} } = {}) {
  const width = numberValue(variables.width, 30);
  const depth = numberValue(variables.depth, 20);
  const height = numberValue(variables.height, 10);

  return translate(
    [0, 0, height / 2],
    cuboid({ size: [width, depth, height] }),
  );
}
