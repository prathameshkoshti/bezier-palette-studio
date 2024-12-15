/* eslint-disable @typescript-eslint/no-shadow */
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
  SelectGroup,
} from '@components/ui/select';
import { curvesTypes, curveSubTypes } from '@constants/curves';
import useColorPicker from '@store/colorPicker';
import { getRelativePositionForHandles } from './utils';

function CurveType() {
  const {
    curveType,
    updateCurveType,
    curveSubType,
    updateCurveSubType,
    startPoint,
    endPoint,
    updateStartPointHandle,
    updateEndPointHandle,
  } = useColorPicker(
    useShallow((state) => {
      const {
        curveType,
        updateCurveType,
        curveSubType,
        updateCurveSubType,
        startPoint,
        endPoint,
        updateStartPointHandle,
        updateEndPointHandle,
      } = state;
      return {
        curveType,
        updateCurveType,
        curveSubType,
        updateCurveSubType,
        startPoint,
        endPoint,
        updateStartPointHandle,
        updateEndPointHandle,
      };
    }),
  );
  const curveTypeOptions = Object.values(curvesTypes);
  const subTypeOptions = Object.values(curveSubTypes);

  useEffect(() => {
    const { startHandleX, startHandleY, endHandleX, endHandleY } =
      getRelativePositionForHandles(
        startPoint,
        endPoint,
        curveType,
        curveSubType,
      );
    updateStartPointHandle({
      x: startHandleX,
      y: startHandleY,
    });

    updateEndPointHandle({
      x: endHandleX,
      y: endHandleY,
    });
  }, [
    curveType,
    curveSubType,
    updateStartPointHandle,
    startPoint,
    endPoint,
    updateEndPointHandle,
  ]);

  return (
    <>
      <div className="w-40 flex flex-col gap-2">
        <SelectGroup>
          <SelectLabel>Curve Type</SelectLabel>
          <Select onValueChange={updateCurveType} value={curveType}>
            <SelectTrigger>
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              {curveTypeOptions.map((type) => (
                <SelectItem key={type.id} value={type.id}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SelectGroup>
      </div>
      <div className="w-48 flex flex-col gap-2">
        {curvesTypes[curveType].subTypes ? (
          <SelectGroup>
            <SelectLabel>Curve Transition</SelectLabel>
            <Select onValueChange={updateCurveSubType} value={curveSubType}>
              <SelectTrigger>
                <SelectValue placeholder="Select Sub Type" />
              </SelectTrigger>
              <SelectContent>
                {subTypeOptions.map((subType) => (
                  <SelectItem key={subType.id} value={subType.id}>
                    {subType.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </SelectGroup>
        ) : null}
      </div>
    </>
  );
}

export default CurveType;
