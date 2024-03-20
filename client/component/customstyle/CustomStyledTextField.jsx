import { styled, makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { COLOR_THEME_DARK } from '../../lib/color-help';

export const TextFieldBlue = styled((props) => (
    <TextField {...props} />
))(({ theme }) => ({
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": { borderColor: COLOR_THEME_DARK },
      },
      "& .MuiOutlinedInput-root.Mui-error": {
        "& > fieldset": { borderColor: "#C94A4A" },
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: COLOR_THEME_DARK
      },
      "& .MuiInputLabel-root.Mui-error": {
        color: "#C94A4A"
      },
      ":hover": {
        "& .MuiInputLabel-root:not(.Mui-disabled)": {
          color: COLOR_THEME_DARK
        },
        "& .MuiOutlinedInput-root:not(.Mui-disabled)": {
          "& > fieldset": { borderColor: COLOR_THEME_DARK },
        },
        "& .MuiInputLabel-root.Mui-error": {
          color: "#C94A4A"
        },
        "& .MuiOutlinedInput-root.Mui-error": {
          "& > fieldset": { borderColor: "#C94A4A" },
        },
      },
}))