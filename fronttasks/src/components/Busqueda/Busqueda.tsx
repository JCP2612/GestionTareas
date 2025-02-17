import React from "react";
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import useTaskStore from "../../interface/filter.interface";

const PriorityFilter: React.FC = () => {
    const selectedPriority = useTaskStore((state) => state.selectedPriority);
    const setSelectedPriority = useTaskStore((state) => state.setSelectedPriority);

    const handlePriorityChange = (event: SelectChangeEvent<string>) => {
        setSelectedPriority(event.target.value as "Todas" | "Alta" | "Media" | "Baja");
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="priority-select-label">Filtrar por Prioridad</InputLabel>
            <Select
                labelId="priority-select-label"
                value={selectedPriority}
                onChange={handlePriorityChange}
            >
                <MenuItem value="Todas">Todas</MenuItem>
                <MenuItem value="Alta">Alta</MenuItem>
                <MenuItem value="Media">Media</MenuItem>
                <MenuItem value="Baja">Baja</MenuItem>
            </Select>
        </FormControl>
    );
};

export default PriorityFilter;