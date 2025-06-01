import {Badge} from '@/components/ui/badge';
import type {JobRegisterFormValues} from '@/schemas/jobRegisterSchema';
import {Separator} from '@/components/ui/separator';

type LaborInfoCardProps = {
    data: JobRegisterFormValues;
    onAccept?: (data: JobRegisterFormValues) => void;
    onDecline?: (data: JobRegisterFormValues) => void;
};

export const LaborInfoCard = ({
    data,
    onAccept,
    onDecline,
}: LaborInfoCardProps) => {
    const handleDownload = (fileName: string) => {
        const url = `/${fileName}.jpg`;

        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}.jpg`;
        a.click();
    };

    return (
        <div className="mx-auto flex w-70 max-w-lg flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <div>
                {/* <h2 className="text-2xl font-semibold mb-4">ข้อมูลผู้สมัครงาน</h2> */}

                <div className="space-y-3 text-gray-700">
                    <p>
                        <span className="font-semibold">ชื่อ:</span>{' '}
                        {data.firstName} {data.lastName}
                    </p>
                    <p>
                        <span className="font-semibold">เบอร์โทร:</span>{' '}
                        {data.phone}
                    </p>
                    <p>
                        <span className="font-semibold">อีเมล:</span>{' '}
                        {data.email}
                    </p>
                    <p>
                        <span className="font-semibold">อายุ:</span>{' '}
                        {data.age ?? '-'}
                    </p>
                    <p>
                        <span className="font-semibold">ที่อยู่:</span>{' '}
                        {data.address}
                    </p>
                    <p>
                        <span className="font-semibold">ประวัติการทำงาน:</span>{' '}
                        {data.workHistory || '-'}
                    </p>
                    <p>
                        <span className="font-semibold">ความสามารถพิเศษ:</span>{' '}
                        {data.skills.length > 0 ? (
                            <span className="mt-1 flex flex-wrap gap-2">
                                {data.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="capitalize"
                                    >
                                        {skill.replace('_', ' ')}
                                    </Badge>
                                ))}
                            </span>
                        ) : (
                            '-'
                        )}
                    </p>
                    <p>
                        <span className="font-semibold">เพศ:</span>{' '}
                        {data.gender ?? '-'}
                    </p>
                </div>
                <div className="mt-4 flex items-center justify-center gap-4">
                    <button
                        onClick={() => handleDownload('fileA')}
                        className="rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
                    >
                        fileA
                    </button>
                    <button
                        onClick={() => handleDownload('fileB')}
                        className="rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
                    >
                        fileB
                    </button>
                    <button
                        onClick={() => handleDownload('fileC')}
                        className="rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
                    >
                        fileC
                    </button>
                </div>
            </div>

            <Separator className="my-2 border-2" />

            <div className="flex justify-end gap-4">
                <button
                    onClick={() => onDecline?.(data)}
                    className="rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                >
                    Decline
                </button>
                <button
                    onClick={() => onAccept?.(data)}
                    className="rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
                >
                    Accept
                </button>
            </div>
        </div>
    );
};
