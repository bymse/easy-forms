import {FormItemType, IFormItem} from "../form-item/IFormItem";
import {FormPlaceholder} from "../form-item/FormPlaceholder";
import {formItemsFactory} from "../form-item/formItemsFactory";

export class FormGrid {
    private static readonly rowsCount: number = 4;
    private static readonly columnsCount: number = 2;

    private readonly itemsGrid: IFormItem[][] = [];
    private readonly forceUpdate: () => void;
    
    constructor(forceUpdate: () => void) {
        this.forceUpdate = forceUpdate;
        for (let i = 0; i < FormGrid.rowsCount; i++) {
            this.itemsGrid[i] = [];
            for (let j = 0; j < FormGrid.columnsCount; j++) {
                this.itemsGrid[i][j] = new FormPlaceholder(i, j); 
            }
        }
    }

    public get items(): IFormItem[] {
        return this.itemsGrid.flat();
    }
    
    public get columns(): number {
        return FormGrid.columnsCount;
    }

    public get rows(): number {
        return FormGrid.rowsCount;
    }
    

    public addItem(x: number, y: number, item: FormItemType): void {
        this.itemsGrid[x][y] = formItemsFactory(item);
        this.forceUpdate();
    }
    
    public removeItem(x: number, y: number): void {
        
    }
}