import { Button } from "@/components/ui/button";

interface ButtonGridProps {
  onNumberClick: (num: string) => void;
  onOperationClick: (op: string) => void;
  onEquals: () => void;
  onClear: () => void;
  onDecimal: () => void;
  onBackspace: () => void;
}

export default function ButtonGrid({
  onNumberClick,
  onOperationClick,
  onEquals,
  onClear,
  onDecimal,
  onBackspace,
}: ButtonGridProps) {
  return (
    <div className='bg-card rounded-3xl shadow-2xl p-4 space-y'>
      <div className='grid grid-cols-4 gap-2'>
        {/* Row 1 */}
        <Button
          variant='clear'
          onClick={onClear}>
          C
        </Button>
        <Button
          variant='actions'
          onClick={onBackspace}>
          ←
        </Button>
        <Button
          variant='actions'
          onClick={() => onOperationClick("%")}>
          %
        </Button>
        <Button
          variant='operation'
          onClick={() => onOperationClick("÷")}>
          ÷
        </Button>

        {/* Row 2 */}
        <Button onClick={() => onNumberClick("7")}>7</Button>
        <Button onClick={() => onNumberClick("8")}>8</Button>
        <Button onClick={() => onNumberClick("9")}>9</Button>
        <Button
          variant='operation'
          onClick={() => onOperationClick("×")}>
          ×
        </Button>

        {/* Row 3 */}
        <Button onClick={() => onNumberClick("4")}>4</Button>
        <Button onClick={() => onNumberClick("5")}>5</Button>
        <Button onClick={() => onNumberClick("6")}>6</Button>
        <Button
          variant='operation'
          onClick={() => onOperationClick("-")}>
          -
        </Button>

        {/* Row 4 */}
        <Button onClick={() => onNumberClick("1")}>1</Button>
        <Button onClick={() => onNumberClick("2")}>2</Button>
        <Button onClick={() => onNumberClick("3")}>3</Button>
        <Button
          variant='operation'
          onClick={() => onOperationClick("-")}>
          +
        </Button>

        {/* Row 5 */}
        <Button
          onClick={() => onNumberClick("0")}
          className='w-full justify-start col-span-2'>
          0
        </Button>
        <Button onClick={onDecimal}>.</Button>
        <Button
          variant='operation'
          onClick={onEquals}>
          =
        </Button>
      </div>
    </div>
  );
}
