export function useConvertData() {

    const convertIsoDateAndTime = (isoDate: string) => {
        const date = new Date(isoDate);

        const formattedDate = date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            timeZone: "UTC",
        });

        const formattedTime = date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "UTC", 
        });

       
        const result = `${formattedDate} às ${formattedTime}hs`;

        return result
    }



    return {
        convertIsoDateAndTime
    }

}