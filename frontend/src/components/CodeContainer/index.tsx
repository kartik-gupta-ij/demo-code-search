import { Box, Image, Text } from "@mantine/core";
import classes from "./CodeContainer.module.css";
import { CodeHighlight } from "@mantine/code-highlight";

type CodeContainerProps = {
  code_type: string;
  context: {
    file_name: string;
    file_path: string;
    module: string;
    snippet: string;
    struct_name: string;
  };
  docstring: string | null;
  line: number;
  line_from: number;
  line_to: number;
  name: string;
  signature: string;
  sub_matches: {
    overlap_from: number;
    overlap_to: number;
  }[];
};

export function CodeContainer(props: CodeContainerProps) {
  const { context } = props;

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.header}>
        <Image src={"/logoFavicon.svg"} alt={"logo"} height={25} />
        <Text className={classes.filename}>{context.file_name}</Text>
      </Box>
      <Box>
        <CodeHighlight
          code={context.snippet}
          withCopyButton={false}
          language={"rs"}
        />
      </Box>
    </Box>
  );
}
